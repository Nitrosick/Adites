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

      <div class="roof-slope">
        <h3
          v-if="+data.slopes === 2"
          class="calculator-subtitle"
          v-html="translates[ln].slope + ' 1'"
        />
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
          v-show="sended"
          :data="data"
          :panel="panel"
        />
      </div>

      <div
        v-show="+data.slopes === 2"
        class="roof-slope"
      >
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].slope + ' 2'"
        />
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
          v-show="sended"
          slope="second"
          :data="data"
          :panel="panel"
        />
      </div>

      <div class="consumption">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].consumption"
        />
        <Input
          id="energy"
          type="number"
          :label="translates[ln].consumptionKw"
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
      </div>

      <div class="equipment">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].equipment"
        />
        <Checkbox
          id="battery"
          :label="translates[ln].battery"
          v-model="additional.battery"
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
        <Checkbox
          id="wr"
          :label="translates[ln].wrs"
          v-model="data.wr"
        />
      </div>

      <div
        v-show="sended && data.wr"
        class="wrs"
      >
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].wrs"
        />
        <Input
          id="wr6kw"
          type="number"
          label="6 kW"
          :required="true"
          :attrs="{ min: 0 }"
          v-model="data.wr6kw"
        />
        <Input
          id="wr8kw"
          type="number"
          label="8 kW"
          :required="true"
          :attrs="{ min: 0 }"
          v-model="data.wr8kw"
        />
        <Input
          id="wr10kw"
          type="number"
          label="10 kW"
          :required="true"
          :attrs="{ min: 0 }"
          v-model="data.wr10kw"
        />
      </div>

      <div class="montage">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].montage"
        />
        <Checkbox
          id="dc-montage"
          :label="`${translates[ln].dcMontage}`"
          v-model="data.dcMontage"
          class="montage-field"
        />
        <Checkbox
          id="ac-montage"
          :label="`${translates[ln].acMontage}`"
          v-model="data.acMontage"
          class="montage-field"
        />
        <Input
          id="distance"
          type="number"
          :label="translates[ln].distance + ' (km)'"
          :required="true"
          :disabled="!data.acMontage && !data.dcMontage"
          v-model="data.distance"
        />
      </div>

      <div class="services">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].services"
        />
        <Checkbox
          id="gerust"
          :label="`${translates[ln].gerust}`"
          v-model="additional.gerust"
        />
        <Checkbox
          id="ameldung"
          :label="`${translates[ln].ameldung}`"
          v-model="additional.ameldung"
        />
        <Checkbox
          id="planning"
          :label="`${translates[ln].planning}`"
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
            <tr v-if="data.wr6kw">
              <td>Wechsel richter 6kw</td>
              <th>x{{ data.wr6kw }}</th>
              <th>{{ sended ? (costs.wr6kw * data.wr6kw) + '€' : '-' }}</th>
            </tr>
            <tr v-if="data.wr8kw">
              <td>Wechsel richter 8kw</td>
              <th>x{{ data.wr8kw }}</th>
              <th>{{ sended ? (costs.wr8kw * data.wr8kw) + '€' : '-' }}</th>
            </tr>
            <tr v-if="data.wr10kw">
              <td>Wechsel richter 10kw</td>
              <th>x{{ data.wr10kw }}</th>
              <th>{{ sended ? (costs.wr10kw * data.wr10kw) + '€' : '-' }}</th>
            </tr>
            <tr
              v-for="a in additionalArr"
              :key="a"
            >
              <td v-html="translates[ln][a]" />
              <th>x1</th>
              <th>{{ sended ? costs[a] + '€' : '-' }}</th>
            </tr>
            <tr v-if="getMontageCost">
              <td v-html="translates[ln].montageAcDc" />
              <th>x1</th>
              <th>{{ sended ? getMontageCost + '€' : '-' }}</th>
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
  distance: 0,

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

  wr: false,
  wr6kw: 0,
  wr8kw: 0,
  wr10kw: 0,
  energy: 1,
  phases: 1,
  acMontage: false,
  dcMontage: false
})

const additional = reactive({
  battery: false,
  subconstruction: false,
  smallParts: false,
  gerust: false,
  ameldung: false,
  planning: false
})

const costs = {
  module: 50,
  battery: 300,
  subconstruction: 1000,
  smallParts: 100,
  wr6kw: 100,
  wr8kw: 150,
  wr10kw: 200,

  montage: 1000,
  gerust: 1000,
  ameldung: 100,
  planning: 500,
  delivery: 2
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
    distance: 'Distance from Dramal',
    customer: 'Customer information',
    equipment: 'Equipment',
    consumption: 'Consumption',
    consumptionKw: 'Energy consumption (kilowatts)',
    phases: 'Number of phases',
    length: 'Length',
    width: 'Width',
    angle: 'Tilt angle',
    slope: 'Slope',
    slopes: 'Number of roof slopes',
    modulesCount: 'Modules quantity',
    battery: 'Battery module',
    services: 'Additional services',
    montage: 'Montage',
    dcMontage: 'DC Montage',
    acMontage: 'AC Montage',
    montageAcDc: 'Montage AC/DC (Up to 50km for free, then 2€/km)',
    gerust: 'Gerüst',
    ameldung: 'Ameldung',
    planning: 'Precise planning of DC and AC',
    total: 'Total',
    totals: 'Totals',
    modules: 'Modules',
    wrs: 'Wechsel richter',
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
    distance: 'Entfernung von Dramal',
    customer: 'Kundeninformationen',
    equipment: 'Ausstattung',
    consumption: 'Verbrauch',
    consumptionKw: 'Energieverbrauch (Kilowatt)',
    phases: 'Anzahl der phasen',
    length: 'Länge',
    width: 'Breite',
    angle: 'Neigungswinkel',
    slope: 'Piste',
    slopes: 'Anzahl der dachschrägen',
    modulesCount: 'Anzahl der Module',
    battery: 'Batteriemodul',
    services: 'Zusatzleistungen',
    montage: 'Montage',
    dcMontage: 'DC Montage',
    acMontage: 'AC Montage',
    montageAcDc: 'Montage AC/DC (Dramaj 50km inkl je weiter +2€/km)',
    gerust: 'Gerüst',
    ameldung: 'Ameldung',
    planning: 'Genaue planung DC und AC',
    total: 'Insgesamt',
    totals: 'Summieren',
    modules: 'Modele',
    wrs: 'Wechsel richter',
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
    distance: 'Udaljenost od Dramala',
    customer: 'Informacije o kupcima',
    equipment: 'Oprema',
    consumption: 'Potrošnja',
    consumptionKw: 'Potrošnja energije (kilovati)',
    phases: 'Broj faza',
    length: 'Duljina',
    width: 'Širina',
    angle: 'Kut nagiba',
    slope: 'Nagib',
    slopes: 'Broj kosina krova',
    modulesCount: 'Broj modula',
    battery: 'Modul baterije',
    services: 'Dodatne usluge',
    montage: 'Montaža',
    dcMontage: 'DC Montaža',
    acMontage: 'AC Montaža',
    montageAcDc: 'Montaža AC/DC (Do 50km besplatno, zatim 2€/km)',
    gerust: 'Gerüst',
    ameldung: 'Ameldung',
    planning: 'Precizno planiranje AC i DC',
    total: 'Cijeli',
    totals: 'Ukupno',
    modules: 'Moduli',
    wrs: 'Wechsel richter',
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

watch(() => [data.first.modules, data.second.modules, data.wr], ([first, second, wr]) => {
  const sum = first + second
  if (!sended.value || !wr) {
    data.wr8kw = 0
    return
  }
  if (sum < 10) return
  data.wr8kw = Math.floor(sum / 10)
})

onMounted(() => {
  const lsSended = localStorage.getItem('calc-form-sended')
  if (lsSended) sended.value = true
})

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })

const getMontageCost = computed(() => {
  const delivery = data.distance <= 50 ? 0 : (data.distance - 50) * costs.delivery
  const ac = !data.acMontage ? 0 : costs.montage
  const dc = !data.dcMontage ? 0 : costs.montage
  if (!ac && !dc) return 0
  return delivery + ac + dc
})

const getTotal = computed(() => {
  let sum = 0
  for (const a of additionalArr.value) { sum += costs[a] }
  const wrs = (costs.wr6kw * data.wr6kw) + (costs.wr8kw * data.wr8kw) + (costs.wr10kw * data.wr10kw)
  return (costs.module * (data.first.modules + data.second.modules)) + sum + wrs + getMontageCost.value
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
    ...data,
    ...additional
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

.consumption,
.equipment {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.customer,
.roof-params,
.roof-slope,
.wrs,
.montage,
.services {
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

.button {
  align-self: flex-end;
}

.montage-field {
  margin-top: 19px;
}

@include breakpoint-md {
  .customer,
  .consumption,
  .equipment,
  .roof-params,
  .roof-slope,
  .wrs,
  .montage,
  .services {
    grid-template-columns: 1fr;
  }

  .battery {
    margin-top: 0;
  }
}
</style>
