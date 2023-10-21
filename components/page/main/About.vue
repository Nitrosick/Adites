<template>
  <div class="about">
    <div class="about-content wrapper">
      <h2 v-html="translates[ln].title[0]" />
      <h2
        class="primary-color"
        v-html="translates[ln].title[1]"
      />
      <div class="about-points">
        <div class="about-points-item">
          <div class="about-points-icon">
            <img
              src="@/assets/images/handshake.png"
              alt="about icon"
            >
          </div>
          <h3 v-html="translates[ln].subtitle1" />
          <p
            class="about-points-description"
            v-html="translates[ln].text1"
          />
        </div>
        <div class="about-points-item">
          <div class="about-points-icon">
            <img
              src="@/assets/images/pencil.png"
              alt="about icon"
            >
          </div>
          <h3 v-html="translates[ln].subtitle2" />
          <p
            class="about-points-description"
            v-html="translates[ln].text2"
          />
        </div>
        <div class="about-points-item">
          <div class="about-points-icon">
            <img
              src="@/assets/images/search.png"
              alt="about icon"
            >
          </div>
          <h3 v-html="translates[ln].subtitle3" />
          <p
            class="about-points-description"
            v-html="translates[ln].text3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: {
    title: ['WE ARE HERE FOR YOU', 'from advice to implementation'],
    subtitle1: 'ADVICE',
    text1: 'Comprehensive and professional advice on often complex topics is very important to us. Our goal is to develop the best possible solution for your building technology. In doing so, we primarily take into account the major advantages of energy-saving technologies and renewable energies and integrate these into your building planning as far as possible.',
    subtitle2: 'PLANNING',
    text2: 'The art of using all the technologies sensibly in existing or new buildings lies in careful planning. It goes into energy generation (photovoltaics), energy management (power-controlled circuits), energy monitoring (smart home) and standard-compliant energy distribution (electrical installation).',
    subtitle3: 'IMPLEMENTATION',
    text3: 'Taking into account the latest regulations, our qualified employees will transform your house into an "intelligent" and energy-optimized house. We take care of the complete installation of the building technology and electrical installation for you and tailor it perfectly to your wishes.',
  },
  de: {
    title: ['WIR SIND FÜR SIE DA', 'von der Beratung bis zur Umsetzung'],
    subtitle1: 'BERATUNG',
    text1: 'Eine umfassende und fachgerechte Beratung, bei den sehr oft komplexen Themen, ist uns sehr wichtig. Unser Ziel ist es, Ihnen die bestmögliche Lösung für Ihre Gebäudetechnik zu erarbeiten. Dabei berücksichtigen wir vor allem die großen Vorteile, von energiesparenden Technologien, sowie erneuerbaren Energien und integrieren diese soweit möglich Ihre Gebäudeplanung.',
    subtitle2: 'PLANUNG',
    text2: 'Die Kunst, all die Technologien im Bestand oder im Neubau sinnvoll einzusetzen liegt in einer maßvollen Planung. Sie geht in Energieerzeugung (Photovoltaik), Energiemanagement (leistungsgeregelte Schaltungen), Energiemonitoring (Smart Home) und normgerechte Energieverteilung (Elektroinstallation) ein.',
    subtitle3: 'UMSETZUNG',
    text3: 'Unter Berücksichtigung der neuesten Vorschriften verwandeln unsere qualifizierten Mitarbeiter Ihr Haus in ein "intelligentes" und energetisch optimiertes Haus. Wir übernehmen für Sie die komplette Installation der Haustechnik und der Elektroinstallation und stimmen diese Perfekt auf Ihre Wünsche ab.',
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }

  .primary-color {
    margin: 1rem 0 5rem 0;
  }

  &-points {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    &-item {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }

    &-icon {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      border: 0.7rem solid $color-accent;
      background-color: $color-primary;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-description {
      text-align: center;
    }
  }
}


@include breakpoint-md {
  .about {
    &-points {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      &-item {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(2, auto);
      }

      &-icon {
        width: 6rem;
        height: 6rem;
        border: 0.6rem solid $color-accent;
      }

      &-description {
        grid-column: 1/3;
        grid-row: 2/3;
        text-align: justify;
      }
    }
  }
}
</style>
