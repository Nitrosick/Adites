<template>
  <div class="contacts wrapper">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <p
      class="contacts-text"
      v-html="translates[ln].subtitle"
    />
    <div class="contacts-item">
      <span class="contacts-item-title">{{ translates[ln].contact1 }}: Ilya Vilvovskiy</span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24678.82072785863!2d11.838741381739188!3d49.44593291896166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a02bb2583a38d1%3A0x1c1eda35f4c536d0!2zOTIyMjQg0JDQvNCx0LXRgNCzLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sge!4v1697185292466!5m2!1sru!2sge"
        allowfullscreen=""
        loading="lazy"
        class="contacts-map"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    <div class="contacts-item">
      <span class="contacts-item-title">{{ translates[ln].contact2 }}: Kevin Dambrowski</span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58691.48299461013!2d11.051818967201271!3d49.4500887154333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f57aeb5b61cd3%3A0xdd5daf85a98c21b7!2z0J3RjtGA0L3QsdC10YDQsywg0JPQtdGA0LzQsNC90LjRjw!5e0!3m2!1sru!2sge!4v1697185691022!5m2!1sru!2sge"
        allowfullscreen=""
        loading="lazy"
        class="contacts-map"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: {
    title: 'CONTACTS',
    subtitle: 'You can choose a consultant in our region.',
    contact1: 'From Amberg Berator',
    contact2: 'From Nuremberg Berator'
  },
  de: {
    title: 'KONTAKT',
    subtitle: 'Sie können einen Berater in unserer Region auswählen.',
    contact1: 'Aus Amberg Berator',
    contact2: 'Aus Nürnberg Berator'
  },
  hr: {
    title: 'KONTAKTI',
    subtitle: 'Možete odabrati savjetnika u našoj regiji.',
    contact1: 'Iz Amberga Beratora',
    contact2: 'Iz Nirnberškog Beratora'
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  padding: 2rem 1rem;
  width: 100%;

  &-text {
    margin: 3rem 0 1rem 0;
  }

  &-item {
    width: 100%;
    padding: 1rem 0;
    border-top: 2px solid $color-grey-3;

    &-title {
      margin-bottom: 2rem;
    }
  }

  &-map {
    width: 100%;
    height: 25rem;
    border: none;
    margin: 1rem 0;
  }
}
</style>
