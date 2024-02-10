<template>
  <div class="calculator wrapper margined">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <form class="calculator-form">
      <div>
        <div class="customer">
          <h3
            class="calculator-subtitle"
            v-html="translates[ln].customer"
          />
          <Input
            id="address"
            :label="translates[ln].address"
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
        </div>

        <div class="roof-params">
          <h3
            class="calculator-subtitle"
            v-html="translates[ln].roofParams"
          />
          <Input
            id="length"
            type="number"
            :label="translates[ln].length + ' (m)'"
            :required="true"
            :attrs="{ min: 1, max: 500, step: 0.2 }"
            v-model="data.length"
          />
          <Input
            id="width"
            type="number"
            :label="translates[ln].width + ' (m)'"
            :required="true"
            :attrs="{ min: 1, max: 500, step: 0.2 }"
            v-model="data.width"
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
        </div>
      </div>

      <Roof
        :data="data"
        :panel="panel"
      />

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
          v-model="data.battery"
        />
      </div>

      <div class="services">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].services"
        />
        <Checkbox
          id="montage"
          :label="`${translates[ln].montage} (${costs.montage}€)`"
          v-model="data.montage"
        />
      </div>

      <div class="total">
        <h3
          class="calculator-subtitle"
          v-html="translates[ln].totals"
        />
        <table class="total-table">
          <tr>
            <td v-html="translates[ln].modules" />
            <th>x{{ data.modulesCount }}</th>
            <th>{{ costs.module * data.modulesCount }}€</th>
          </tr>
          <tr>
            <td>WR</td>
            <th>x{{ data.wrCount }}</th>
            <th>{{ costs.wr * data.wrCount }}€</th>
          </tr>
          <tr>
            <td v-html="translates[ln].subconstruction" />
            <th>x{{ data.subconstructionsCount }}</th>
            <th>{{ costs.subconstruction * data.subconstructionsCount }}€</th>
          </tr>
          <tr>
            <td v-html="translates[ln].small" />
            <th>x{{ data.smallParts }}</th>
            <th>{{ costs.smallParts * data.smallParts }}€</th>
          </tr>
          <tr>
            <th v-html="translates[ln].total" colspan="2" class="left" />
            <th>{{ getTotal }}€</th>
          </tr>
        </table>
      </div>

      <Button
        :text="translates[ln].order"
        type="submit"
        class="button"
      />
    </form>
  </div>
</template>

<script setup>
import Roof from '@/components/page/calculator/Roof.vue'

const store = useMainStore()
const ln = computed(() => store.language)

const data = reactive({
  address: null,
  phone: null,
  length: 2,
  width: 1,
  angle: 0,
  energy: 1,
  phases: 1,
  battery: false,
  montage: false,
  modulesCount: 20,
  wrCount: 1,
  subconstructionsCount: 1,
  smallParts: 1
})

const panel = {
  length: 1.13,
  width: 1.73
}

const costs = {
  module: 50,
  wr: 1000,
  subconstruction: 1000,
  smallParts: 100,
  montage: 1000
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
    battery: 'Battery module',
    services: 'Additional services',
    montage: 'Montage',
    total: 'Total',
    totals: 'Totals',
    modules: 'Modules',
    subconstruction: 'Set subconstruction',
    small: 'Small parts',
    order: 'Order'
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
    battery: 'Batteriemodul',
    services: 'Zusatzleistungen',
    montage: 'Montage',
    total: 'Insgesamt',
    totals: 'Summieren',
    modules: 'Modele',
    subconstruction: 'Set unterconstruktion',
    small: 'Kleinteilen',
    order: 'Bestellen'
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
    battery: 'Modul baterije',
    services: 'Dodatne usluge',
    montage: 'Montaža',
    total: 'Cijeli',
    totals: 'Ukupno',
    modules: 'Moduli',
    subconstruction: 'Ugradite podkonstrukciju',
    small: 'Mali detalji',
    order: 'Narudžba'
  }
}

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })

const getTotal = computed(() => (
  (costs.module * data.modulesCount) +
  (costs.wr * data.wrCount) +
  (costs.subconstruction * data.subconstructionsCount) +
  (costs.smallParts * data.smallParts)
))
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

.customer,
.services {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.roof-params,
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
}
</style>
