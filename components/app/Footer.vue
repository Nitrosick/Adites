<template>
  <div class="footer">
    <div class="footer-content wrapper">
      <h2
        class="footer-title"
        v-html="translates[ln].title"
      />
      <span class="footer-doo">
        ADITES d.o.o.
      </span>
      <span class="footer-oib">
        OIB: 66431590302
      </span>
      <i class="footer-address">
        Vinodolska ul. 27, 51260<br>Crikvenica, Hrvatska
      </i>
      <a
        href="tel:+38551452461"
        class="footer-link"
      >
        TEL +385 514 524 61
      </a>
      <a
        href="tel:+385992274056"
        class="footer-link"
      >
        WhatsApp +385 99 227 4056
      </a>
      <a
        href="mailto:info@adites.hr"
        class="footer-link"
      >
        info@adites.hr
      </a>
    </div>
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: { title: 'Contacts' },
  de: { title: 'Kontakt' },
  hr: { title: 'Kontakti' }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-grey-1;

  &-content {
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem;
    color: $color-white;
  }

  &-title {
    margin-bottom: 1rem;
    text-align: left;
  }

  &-doo {
    font-weight: 600;
  }

  &-oib {
    font-size: $font-size-sm;
    opacity: 0.6;
    margin-bottom: 0.5rem;
  }

  &-address {
    margin-bottom: 1rem;
  }

  &-link {
    color: $color-white;
  }
}
</style>
