<template>
  <div class="calculator wrapper margined">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <form
      class="calculator-form"
      @submit.prevent="onSubmit"
    >
      <div class="customer">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].customer"
        />
        <Input
          id="address"
          :label="translates[ln].address"
          placeholder="..."
          :required="true"
          v-model="data.address"
        />
        <Input
          id="phone"
          type="tel"
          :label="translates[ln].phone"
          :placeholder="translates[ln].phoneMask"
          :required="true"
          v-model="data.phone"
        />
        <Input
          id="email"
          type="email"
          label="E-mail"
          placeholder="email@gmail.com"
          :required="true"
          v-model="data.email"
        />
      </div>

      <div class="roof-params">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].roofParams"
        />
        <Select
          id="angle"
          :label="translates[ln].angle"
          :options="{
            0: '0° (horizontal)',
            30: '30°',
            45: '45°',
            60: '60°',
            90: '90° (vartical)'
          }"
          :defaultValue="false"
          v-model="data.angle"
        />
        <Select
          id="slopes"
          :label="translates[ln].slopes"
          :options="{
            1: 1,
            2: 2
          }"
          :defaultValue="false"
          v-model="data.slopes"
        />
        <Select
          id="roof-type"
          :label="translates[ln].roofType"
          :options="roofTypes"
          :defaultValue="false"
          v-model="data.roofType"
        />
      </div>

      <div
        v-show="sended"
        class="roof-slope"
      >
        <Input
          id="length_1"
          type="number"
          :label="translates[ln].length + ' (m)'"
          :required="true"
          :attrs="{ min: 1, max: 500, step: 0.2 }"
          v-model="data.first.length"
        />
        <Input
          id="width_1"
          type="number"
          :label="translates[ln].width + ' (m)'"
          :required="true"
          :attrs="{ min: 1, max: 500, step: 0.2 }"
          v-model="data.first.width"
        />
        <Input
          id="modules_1"
          type="number"
          :label="`${translates[ln].modulesCount} (max: ${data.first.max})`"
          :required="true"
          :alert="data.first.modules > data.first.max"
          :attrs="{ min: 0 }"
          v-model="data.first.modules"
        />
        <Roof
          :data="data"
          :panel="panel"
        />
      </div>

      <div
        v-show="sended && +data.slopes === 2"
        class="roof-slope"
      >
        <Input
          id="length_2"
          type="number"
          :label="translates[ln].length + ' (m)'"
          :required="true"
          :attrs="{ min: 1, max: 500, step: 0.2 }"
          v-model="data.second.length"
        />
        <Input
          id="width_2"
          type="number"
          :label="translates[ln].width + ' (m)'"
          :required="true"
          :attrs="{ min: 1, max: 500, step: 0.2 }"
          v-model="data.second.width"
        />
        <Input
          id="modules_2"
          type="number"
          :label="`${translates[ln].modulesCount} (max: ${data.second.max})`"
          :required="true"
          :alert="data.second.modules > data.second.max"
          :attrs="{ min: 0 }"
          v-model="data.second.modules"
        />
        <Roof
          slope="second"
          :data="data"
          :panel="panel"
        />
      </div>

      <div class="equipment">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].equipment"
        />
        <Input
          id="energy"
          type="number"
          :label="translates[ln].consumption"
          :required="true"
          :attrs="{ min: 1 }"
          v-model="data.energy"
        />
        <Select
          id="phases"
          :label="translates[ln].phases"
          :options="{
            1: '1-Phase',
            2: '3-Phase'
          }"
          :defaultValue="false"
          v-model="data.phases"
        />
        <Checkbox
          id="battery"
          :label="translates[ln].battery"
          class="battery"
          v-model="additional.battery"
        />
        <Checkbox
          id="wr"
          label="WR"
          v-model="additional.wr"
        />
        <Checkbox
          id="subconstruction"
          :label="translates[ln].subconstruction"
          v-model="additional.subconstruction"
        />
        <Checkbox
          id="small"
          :label="translates[ln].smallParts"
          v-model="additional.smallParts"
        />
      </div>

      <div class="services">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].services"
        />
        <Checkbox
          id="dc-montage"
          :label="`${translates[ln].dcMontage} (${costs.dcMontage}€)`"
          v-model="additional.dcMontage"
        />
        <Checkbox
          id="ac-montage"
          :label="`${translates[ln].acMontage} (${costs.acMontage}€)`"
          v-model="additional.acMontage"
        />
        <Checkbox
          id="genaustabau"
          :label="`${translates[ln].genaustabau} (${costs.genaustabau}€)`"
          v-model="additional.genaustabau"
        />
        <Checkbox
          id="ameldung"
          :label="`${translates[ln].ameldung} (${costs.ameldung}€)`"
          v-model="additional.ameldung"
        />
        <Checkbox
          id="planning"
          :label="`${translates[ln].planning} (${costs.planning}€)`"
          v-model="additional.planning"
        />
      </div>

      <div class="total">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].totals"
        />
        <table class="total-table">
          <tbody>
            <tr v-if="data.first.modules || data.second.modules">
              <td v-html="translates[ln].modules" />
              <th>x{{ data.first.modules + data.second.modules }}</th>
              <th>{{ sended ? (costs.module * (data.first.modules + data.second.modules)) + '€' : '-' }}</th>
            </tr>
            <tr
              v-for="a in additionalArr"
              :key="a"
            >
              <td v-html="translates[ln][a]" />
              <th>x1</th>
              <th>{{ sended ? costs[a] + '€' : '-' }}</th>
            </tr>
            <tr>
              <th v-html="translates[ln].total" colspan="2" class="left" />
              <th>{{ sended ? getTotal + '€' : '-' }}</th>
            </tr>
          </tbody>
        </table>
      </div>

      <Button
        :text="translates[ln].calculate"
        type="submit"
        :disabled="loading"
        class="button"
      />
    </form>
  </div>
</template>

<script setup>
import Roof from '@/components/page/calculator/Roof.vue'

const store = useMainStore()
const { $api } = useNuxtApp()
const ln = computed(() => store.language)
const loading = ref(false)
const sended = ref(false)

const data = reactive({
  address: null,
  phone: null,
  email: null,

  angle: 0,
  slopes: 2,
  roofType: 'tiles',

  first: {
    length: 2,
    width: 1,
    modules: 0,
    max: 0
  },
  second: {
    length: 2,
    width: 1,
    modules: 0,
    max: 0
  },

  energy: 1,
  phases: 1,
})

const additional = reactive({
  battery: false,
  wr: false,
  subconstruction: false,
  smallParts: false,

  dcMontage: false,
  acMontage: false,
  genaustabau: false,
  ameldung: false,
  planning: false
})

const costs = {
  module: 50,
  battery: 300,
  wr: 1000,
  subconstruction: 1000,
  smallParts: 100,

  dcMontage: 1000,
  acMontage: 1000,
  genaustabau: 1000,
  ameldung: 100,
  planning: 500
}

const panel = {
  length: 1.13,
  width: 1.73
}

const translates = {
  en: {
    title: 'Solar panel calculator',
    roofParams: 'Roof parameters',
    address: 'Address',
    phone: 'Phone',
    phoneMask: '(750) 000-0000',
    customer: 'Customer information',
    equipment: 'Equipment and consumption',
    consumption: 'Energy consumption (kilowatts)',
    phases: 'Number of phases',
    length: 'Length',
    width: 'Width',
    angle: 'Tilt angle',
    slopes: 'Number of roof slopes',
    modulesCount: 'Modules quantity',
    battery: 'Battery module',
    services: 'Additional services',
    dcMontage: 'DC Montage',
    acMontage: 'AC Montage ( Dramaj 50km inkl je weiter +50c/km)',
    genaustabau: 'Genaustabau',
    ameldung: 'Ameldung',
    planning: 'Precise planning of DC and AC',
    total: 'Total',
    totals: 'Totals',
    modules: 'Modules',
    wr: 'WR',
    subconstruction: 'Set subconstruction',
    smallParts: 'Small parts',
    roofType: 'Roof type',
    tiles: 'Tiles',
    metal: 'Metal',
    order: 'Order',
    calculate: 'Calculate'
  },
  de: {
    title: 'Solarpanel-rechner',
    roofParams: 'Dachparameter',
    address: 'Anschrift',
    phone: 'Telefon',
    phoneMask: '+(50 00) 000-00-00',
    customer: 'Kundeninformationen',
    equipment: 'Ausstattung und Verbrauch',
    consumption: 'Energieverbrauch (Kilowatt)',
    phases: 'Anzahl der phasen',
    length: 'Länge',
    width: 'Breite',
    angle: 'Neigungswinkel',
    slopes: 'Anzahl der dachschrägen',
    modulesCount: 'Anzahl der Module',
    battery: 'Batteriemodul',
    services: 'Zusatzleistungen',
    dcMontage: 'DC Montage',
    acMontage: 'AC Montage ( Dramaj 50km inkl je weiter +50c/km)',
    genaustabau: 'Genaustabau',
    ameldung: 'Ameldung',
    planning: 'Genaue planung DC und AC',
    total: 'Insgesamt',
    totals: 'Summieren',
    modules: 'Modele',
    wr: 'WR',
    subconstruction: 'Set unterconstruktion',
    smallParts: 'Kleinteilen',
    roofType: 'Dachtyp',
    tiles: 'Dachziegel',
    metal: 'Metall',
    order: 'Bestellen',
    calculate: 'Berechnen'
  },
  hr: {
    title: 'Kalkulator solarnih panela',
    roofParams: 'Parametri krova',
    address: 'Adresa',
    phone: 'Telefon',
    phoneMask: '+385-00 (0000000)',
    customer: 'Informacije o kupcima',
    equipment: 'Oprema i potrošnja',
    consumption: 'Potrošnja energije (kilovati)',
    phases: 'Broj faza',
    length: 'Duljina',
    width: 'Širina',
    angle: 'Kut nagiba',
    slopes: 'Broj kosina krova',
    modulesCount: 'Broj modula',
    battery: 'Modul baterije',
    services: 'Dodatne usluge',
    dcMontage: 'DC Montaža',
    acMontage: 'AC Montage ( Dramaj 50km inkl je weiter +50c/km)',
    genaustabau: 'Genaustabau',
    ameldung: 'Ameldung',
    planning: 'Precizno planiranje AC i DC',
    total: 'Cijeli',
    totals: 'Ukupno',
    modules: 'Moduli',
    wr: 'WR',
    subconstruction: 'Ugradite podkonstrukciju',
    smallParts: 'Mali detalji',
    roofType: 'Vrsta krova',
    tiles: 'Crijep',
    metal: 'Metal',
    order: 'Narudžba',
    calculate: 'Izračunati'
  }
}

watch(() => data.slopes, (val) => {
  if (+val === 1) {
    data.second.length = 2
    data.second.width = 1
    data.second.modules = 0
    data.second.max = 0
  }
})

onMounted(() => {
  const lsSended = localStorage.getItem('calc-form-sended')
  if (lsSended) sended.value = true
})

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })

const getTotal = computed(() => {
  let sum = 0
  for (const a of additionalArr.value) { sum += costs[a] }
  return (costs.module * (data.first.modules + data.second.modules)) + sum
})

const additionalArr = computed(() => {
  const result = []
  for (const a in additional) {
    if (additional[a]) result.push(a)
  }
  return result
})

const roofTypes = computed(() => ({
  tiles: translates[ln.value].tiles,
  metal: translates[ln.value].metal
}))

const onSubmit = async () => {
  loading.value = true

  const [, err] = await $api('https://formcarry.com/s/zf6KiY049l', {
    email: data.email,
    phone: data.phone,
    address: data.address
  })

  if (err) {
    console.error(err)
    loading.value = false
    return
  }

  sended.value = true
  loading.value = false
  localStorage.setItem('calc-form-sended', true)
  window.scrollTo(0, 0)
}
</script>

<style lang="scss" scoped>
.calculator {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem 1rem;
  width: 100%;

  &-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &-subtitle {
    text-align: left;
    grid-column: 1/-1;
  }
}

.services {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.customer,
.roof-params,
.roof-slope,
.equipment {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.total {
  &-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 1rem;

    th, td {
      padding: 1rem;
      border: 1px solid $color-grey-3;
    }

    .left {
      text-align: left;
    }
  }
}

.battery {
  margin-top: 19px;
}

.button {
  align-self: flex-end;
}

@include breakpoint-md {
  .customer,
  .services,
  .roof-params,
  .equipment {
    grid-template-columns: 1fr;
  }

  .battery {
    margin-top: 0;
  }
}
</style>
