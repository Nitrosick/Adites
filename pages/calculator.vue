<template>
  <div class="calculator wrapper margined">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <form class="calculator-form">
      <h2
        class="calculator-title"
        v-html="translates[ln].panelsCount"
      />
      <div class="area">
        <div class="area-fields">
          <div>
            <h3
              class="calculator-subtitle"
              v-html="translates[ln].energyConsume"
            />
            <Input
              id="energy"
              type="number"
              :label="translates[ln].kWt"
              :required="true"
              :attrs="{ min: 1 }"
              v-model="data.energy"
            />
          </div>
          <div>
            <h3
              class="calculator-subtitle"
              v-html="translates[ln].roofSize"
            />
            <Input
              id="length"
              type="number"
              :label="translates[ln].length"
              :required="true"
              :attrs="{ min: 1, max: 500, step: 0.2 }"
              v-model="data.length"
            />
            <Input
              id="width"
              type="number"
              :label="translates[ln].width"
              :required="true"
              :attrs="{ min: 1, max: 500, step: 0.2 }"
              v-model="data.width"
            />
          </div>
        </div>
        <Roof
          :data="data"
          :panel="panel"
        />
      </div>

      <h2
        class="calculator-title"
        v-html="translates[ln].equipment"
      />
      <div class="equipment">
        <div class="equipment-module">
          <h3
            class="calculator-subtitle"
            v-html="translates[ln].solarModule"
          />
          <Select
            id="module"
            :label="translates[ln].moduleCapacity"
            :options="{
              100: 'Solar module 100 Wt',
              200: 'Solar module 200 Wt',
              500: 'Solar module 500 Wt'
            }"
            :defaultValue="false"
            v-model="data.power"
          />
          <div class="equipment-module-count">
            <Input
              id="modules-count"
              type="number"
              :label="translates[ln].modulesCount"
              :required="true"
              :attrs="{ min: 1, max: 1000 }"
              v-model="data.modulesCount"
              class="input"
            />
            <span>
              = {{ (0.68 * data.modulesCount).toFixed(2) }} m²
            </span>
          </div>
          <div class="equipment-module-angle">
            <Radio
              :label="translates[ln].angle"
              :options="{
                0: '0° (horizontal)',
                30: '30°',
                45: '45°',
                60: '60°',
                90: '90° (vartical)'
              }"
              v-model="data.angle"
            />
          </div>
        </div>
        <div class="equipment-invertor">
          <h3
            class="calculator-subtitle"
            v-html="translates[ln].addInverter"
          />
          <Select
            id="invertor"
            :label="translates[ln].inverterType"
            :options="{}"
            v-model="data.invertor"
          />
          <Input
            id="invertors-count"
            type="number"
            :label="translates[ln].invertersCount"
            :required="true"
            :attrs="{ min: 1, max: 100 }"
            v-model="data.invertorsCount"
            class="input"
          />
          <div class="equipment-invertor-battery">
            <Select
              id="battery"
              :label="translates[ln].battery"
              :options="{}"
              v-model="data.battery"
            />
            <Input
              id="accumulate"
              type="number"
              :label="translates[ln].accumulate"
              :required="true"
              :attrs="{ min: 1, max: 1000 }"
              v-model="data.accumulate"
            />
          </div>
        </div>
      </div>

      <h2
        class="calculator-title"
        v-html="translates[ln].totals"
      />
      <div class="total">
        <div>{{ translates[ln].totalDefault }}: <span class="total-value">_€</span></div>
        <div>{{ translates[ln].totalInstall }}: <span class="total-value">_€</span></div>
        <div>{{ translates[ln].totalElectician }}: <span class="total-value">_€</span></div>
        <div>{{ translates[ln].totalConnect }}: <span class="total-value">_€</span></div>
      </div>
    </form>
  </div>
</template>

<script setup>
import Roof from '@/components/page/calculator/Roof.vue'

const store = useMainStore()
const ln = computed(() => store.language)

const data = reactive({
  energy: 1,
  length: 2,
  width: 1,
  power: 100,
  modulesCount: 2,
  angle: 0,
  invertor: null,
  invertorsCount: 1,
  battery: null,
  accumulate: 10
})

const panel = {
  length: 1.13,
  width: 1.73
}

const translates = {
  en: {
    title: 'Solar panel calculator',
    panelsCount: 'Panel quantity calculation',
    energyConsume: 'How much energy do you consume per year?',
    kWt: 'In kilowatts',
    roofSize: 'Roof size',
    length: 'Length',
    width: 'Width',
    equipment: 'Identification of the equipment to be used',
    solarModule: 'Select a solar module',
    moduleCapacity: 'Module capacity',
    modulesCount: 'Module quantity',
    angle: 'Tilt angle',
    addInverter: 'Add inverter',
    inverterType: 'Inverter type',
    invertersCount: 'Inverter quantity',
    battery: 'Battery module',
    accumulate: 'How many kWh do you need to accumulate?',
    totals: 'Totals',
    totalDefault: 'Cost of Panels with Inverter and Battery module',
    totalInstall: 'Cost of equipment with Installation',
    totalElectician: 'Cost of equipment with Installation and Electrician',
    totalConnect: 'Cost of system connection (registration in the network)'
  },
  de: {
    title: 'Solarpanel-rechner',
    panelsCount: 'Berechnung der plattenmenge',
    energyConsume: 'Wie viel energie verbrauchen sie pro jahr?',
    kWt: 'In kilowatt',
    roofSize: 'Dachgröße',
    length: 'Länge',
    width: 'Breite',
    equipment: 'Identifizierung der zu verwendenden ausrüstung',
    solarModule: 'Wählen sie ein solarmodul',
    moduleCapacity: 'Modulkapazität',
    modulesCount: 'Modul-quantität',
    angle: 'Neigungswinkel',
    addInverter: 'Wechselrichter hinzufügen',
    inverterType: 'Wechselrichter-typ',
    invertersCount: 'Wechselrichter-menge',
    battery: 'Batteriemodul',
    accumulate: 'Wie viele kWh müssen sie akkumulieren?',
    totals: 'Summieren',
    totalDefault: 'Kosten für Panels mit Wechselrichter und Batteriemodul',
    totalInstall: 'Ausrüstungskosten mit Installation',
    totalElectician: 'Ausrüstungskosten mit Installation und Elektriker',
    totalConnect: 'Kosten für die systemverbindung (registrierung im netzwerk)'
  },
  hr: {
    title: 'Kalkulator solarnih panela',
    panelsCount: 'Izračunavanje broja ploča',
    energyConsume: 'Koliko energije trošite godišnje?',
    kWt: 'U kilovatima',
    roofSize: 'Veličina krova',
    length: 'Duljina',
    width: 'Širina',
    equipment: 'Identifikacija opreme koja će se koristiti',
    solarModule: 'Odaberite solarni modul',
    moduleCapacity: 'Kapacitet modula',
    modulesCount: 'Broj modula',
    angle: 'Kut nagiba',
    addInverter: 'Dodaj pretvarač',
    inverterType: 'Vrsta pretvarača',
    invertersCount: 'Broj pretvarača',
    battery: 'Modul baterije',
    accumulate: 'Koliko kvth trebate uštedjeti?',
    totals: 'Ukupno',
    totalDefault: 'Cijena Panela s Pretvaračem i Baterijskim modulom',
    totalInstall: 'Trošak opreme s Instalacijom',
    totalElectician: 'Trošak opreme s Instalacijom i Električarom',
    totalConnect: 'Troškovi povezivanja sa sustavom (registracija na mreži)'
  }
}

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })
</script>

<style lang="scss" scoped>
.calculator {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;

  &-title {
    margin: 2rem 0;
  }

  &-subtitle {
    text-align: left;
    margin-bottom: 1rem;
  }
}

.area {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid $color-grey-3;

  &-fields {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.equipment {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid $color-grey-3;

  &-module {
    &-count {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .input {
        flex-grow: 1;
      }
    }

    &-angle {
      padding-top: 2rem;
      margin-top: 2rem;
      border-top: 2px solid $color-grey-3;
    }
  }

  &-invertor {
    &-battery {
      padding-top: 2rem;
      margin-top: 2rem;
      border-top: 2px solid $color-grey-3;
    }
  }
}

.total {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: $font-size-lg;
  font-weight: 600;

  &-value {
    font-size: $font-size-xl;
    color: $color-primary;
  }
}

@include breakpoint-xl {
  .area {
    display: flex;
    flex-direction: column;

    &-fields {
      max-width: calc(50vw - 2rem);
    }
  }
}

@include breakpoint-md {
  .area {
    &-fields {
      max-width: initial;
    }
  }

  .equipment {
    display: flex;
    flex-direction: column;
  }
}
</style>
