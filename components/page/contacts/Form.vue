<template>
  <div class="contact-form">
    <h2 v-html="translates[ln].title" />
    <form
      action="https://formcarry.com/s/zf6KiY049l"
      method="POST"
      enctype="multipart/form-data"
      class="contact-form-content"
    >
      <Input
        id="name"
        :label="translates[ln].nameLable"
        :placeholder="translates[ln].namePlaceholder"
        :required="true"
      />

      <Input
        id="email"
        :label="translates[ln].emailLabel"
        :placeholder="translates[ln].emailPlaceholder"
        :required="true"
      />

      <Textarea
        id="message"
        :label="translates[ln].messageLabel"
        :placeholder="translates[ln].messagePlaceholder"
        :required="true"
      />

      <div class="contact-form-submit">
        <Button
          :text="translates[ln].send"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const translates = {
  en: {
    title: 'Feedback form',
    nameLable: 'Full name',
    namePlaceholder: 'Your first and last name',
    emailLabel: 'E-mail address',
    emailPlaceholder: 'E-mail',
    messageLabel: 'Message',
    messagePlaceholder: 'Enter your message',
    send: 'Send'
  },
  de: {
    title: 'Feedback formular',
    nameLable: 'Vollständiger name',
    namePlaceholder: 'Ihr vor- und nachname',
    emailLabel: 'E-mail-adresse',
    emailPlaceholder: 'E-mail',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Geben sie ihre nachricht ein',
    send: 'Senden'
  },
  hr: {
    title: 'Obrazac za povratne informacije',
    nameLable: 'Puno ime',
    namePlaceholder: 'Vaše ime i prezime',
    emailLabel: 'Adresa e-pošte',
    emailPlaceholder: 'E-mail',
    messageLabel: 'Poruka',
    messagePlaceholder: 'Upišite svoju poruku',
    send: 'Poslati'
  }
}

const send = () => {

}
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  border-top: 2px solid $color-grey-3;

  &-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    gap: 1rem;
  }

  &-submit {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
  }
}

@include breakpoint-sm {
  .contact-form {
    &-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
