<template>
  <div
    class="cookie"
    :class="{ 'opened': opened }"
  >
    <h3
      class="cookie-title"
      v-html="translates[ln].title"
    />
    <p
      class="cookie-text"
      v-html="translates[ln].text"
    />
    <div class="cookie-control">
      <Button
        :text="translates[ln].accept"
        @click="accept"
      />
      <Button
        :text="translates[ln].decline"
        type="outlined"
        @click="accept"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const store = useMainStore()
const ln = computed(() => store.language)
const opened = ref(false)

const accept = () => {
  localStorage.setItem('cookiesAccepted', true)
  opened.value = false
}

const translates = {
  en: {
    title: 'Cookies & Privacy',
    text: 'This website uses cookies to ensure you get the best expirience on our website',
    accept: 'Accept',
    decline: 'Decline'
  },
  de: {
    title: 'Cookies und Datenschutz',
    text: 'Diese Website verwendet Cookies, um sicherzustellen, dass Sie das beste Erlebnis auf unserer Website haben',
    accept: 'Akzeptieren',
    decline: 'Rückgang'
  },
  hr: {
    title: 'Datoteke i privatnost',
    text: 'Ova internetska stranica koristi datoteke kako bi se osiguralo da ćete dobiti najbolje moguće iskustvo na našoj internetskoj stranici',
    accept: 'Prihvatiti',
    decline: 'Smanjenje'
  }
}

onMounted(() => {
  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => { opened.value = true }, 750);
  }
})
</script>

<style lang="scss" scoped>
.cookie {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  height: 13rem;
  max-width: 30rem;
  padding: 1rem;
  box-shadow: $shadow;
  background-color: $color-background;
  transform: translateY(15rem);
  transition: transform 0.5s;

  &-title {
    text-align: left;
    color: $color-primary;
  }

  &-control {
    align-self: flex-end;
    display: flex;
    gap: 0.5rem;
  }

  &.opened {
    transform: translateY(0);
  }
}

@include breakpoint-md {
  .cookie {
    height: auto;
    max-width: none;
    width: calc(100% - 2rem);
    transform: translateY(30rem);

    &-control {
      width: 100%;
      flex-direction: column;
    }
  }
}
</style>
