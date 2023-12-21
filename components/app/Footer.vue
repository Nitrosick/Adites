<template>
  <div class="footer">
    <div class="footer-content wrapper">
      <h2
        class="footer-title"
        v-html="translates[ln].title"
      />
      <span class="footer-gmbh">
        ADITES GmbH
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
    margin-bottom: 1.5rem;
    text-align: left;
  }

  &-gmbh {
    font-weight: 600;
  }

  &-address {
    margin-bottom: 1.5rem;
  }

  &-link {
    color: $color-white;
  }
}
</style>
