<template>
  <div class="welcome wrapper">
    <div class="welcome-text">
      <div class="welcome-text-title">
        <h2 v-html="translates[ln].title[0]" />
        <h2
          class="primary-color"
          v-html="translates[ln].title[1]"
        />
      </div>
      <div class="welcome-item">
        <img
          src="@/assets/images/sunrize.jpg"
          alt="sunrize"
        >
        <p
          class="welcome-item-content"
          v-html="translates[ln].text1"
        />
      </div>
      <div class="welcome-item">
        <img
          src="@/assets/images/energy.png"
          alt="energy"
        >
        <p
          class="welcome-item-content"
          v-html="translates[ln].text2"
        />
      </div>
    </div>
    <div class="welcome-image" />
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: {
    title: ['Welcome to ADITES', 'with us SIMPLY energy freedom'],
    text1: 'Why photovoltaics?<br><br>- Your path to energy freedom<br>- You protect the environment<br>- High and long-term returns<br>- Protection against rising electricity prices<br>- Increase in the value of your real estate',
    text2: 'Why with us?<br><br>- Complete offer including assembly and registration<br>- Reliable installation<br>- Transparency<br>- Systems of all sizes - private or commercial'
  },
  de: {
    title: ['Herzlich Willkommen bei ADITES', 'mit uns EINFACH Energiefreiheit'],
    text1: 'Warum Photovoltaik?<br><br>- Ihr Weg zur Energiefreiheit<br>- Sie schützen die Umwelt<br>- Hohe und langfristige Rendite<br>- Absicherung vor steigenden Strompreisen<br>- Wertsteigerung ihrer Immobilien',
    text2: 'Warum bei uns?<br><br>- Komplettangebot inkl. Montage und Anmeldung<br>- Zuverlässige Installation<br>- Transparenz<br>- Anlagen aller Größen<br>- Privat oder gewerblich'
  },
  hr: {
    title: ['Dobrodošli u ADITES', 's nama je samo energija SLOBODE'],
    text1: 'Zašto fotonaponski sustavi?<br><br>- Vaš put do energetske slobodi<br>- Koje štite okoliš<br>- Visoka i dugotrajna dobit<br>- Zaštita od rasta cijena električne energije,<br>- Povećanje vrijednosti vaše nekretnine',
    text2: 'Zašto s nama?<br><br>- Sveobuhvatna ponuda, uključujući montažu i registraciju<br>- Pouzdana instalacija<br>- Transparentnost<br>- Sustavi svih veličina - privatni ili komercijalni'
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem 1rem;

  &-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &-title {
      h2 {
        text-align: left;
      }

      .primary-color {
        margin-top: 1rem;
      }
    }
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 2rem;

    &-content {
      font-size: $font-size-lg;
      line-height: 1.3rem;
    }
  }

  &-image {
    min-height: 35rem;
    background: url(/assets/images/transport.webp) left bottom / cover no-repeat;
  }
}

@include breakpoint-md {
  .welcome {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &-text {
      &-title {
        h2 {
          text-align: center;
        }
      }
    }

    &-item {
      gap: 1rem;

      &-content {
        font-size: $font-size-md;
        line-height: 1.2rem;
      }
    }

    &-image {
      min-height: 25rem;
    }
  }
}
</style>
