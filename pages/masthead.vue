<template>
  <div class="masthead wrapper margined">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <section
      v-for="section in sections"
      :key="section.id"
      class="masthead-section"
    >
      <h2
        v-if="section.title"
        class="masthead-section-title"
        v-html="section.title[ln]"
      />
      <h2
        v-if="section.subtitle"
        class="masthead-section-subtitle"
        v-html="section.subtitle[ln]"
      />
      <p
        class="masthead-section-content"
        v-html="section.content[ln]"
      />
    </section>
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const sections = [
  {
    id: 1,
    title: {
      en: 'Information according to § 5 TMG',
      de: 'Angaben gemäß § 5 TMG',
      hr: 'Podaci navedeni u nih 5'
    },
    subtitle: null,
    content: {
      en: 'ADITES d.o.o.<br><b>Paul-Forbach-Str. 2</b><br>97616 Bad Neustadt a. d. Saale',
      de: 'ADITES d.o.o.<br><b>Paul-Forbach-Str. 2</b><br>97616 Bad Neustadt a. d. Saale',
      hr: 'LLC "ADITES"<br><b>Paul Forbach-ulica 2</b><br>97616 Bad Neustadt A. D. Saale'
    }
  },
  {
    id: 2,
    title: {
      en: 'Represented by',
      de: 'Vertreten durch',
      hr: 'Predstavljen'
    },
    subtitle: null,
    content: {
      en: 'Managing Directors:<br>Alexei Erlich, Dieter Esau',
      de: 'Geschäftsführer:<br>Alexei Erlich, Dieter Esau',
      hr: 'Upravni direktor: Alexei Erlich, Dieter Esau'
    }
  },
  {
    id: 3,
    title: {
      en: 'Contact',
      de: 'Kontakt',
      hr: 'Kontakt'
    },
    subtitle: null,
    content: {
      en: 'Telephone: +49 (0) 9771 6372633<br>Telefax: +49 (0) 9321 21457920<br>E-Mail: info@adites.de',
      de: 'Telefon: +49 (0) 9771 6372633<br>Telefax: +49 (0) 9321 21457920<br>E-Mail: info@adites.de',
      hr: 'Telefon: +49 (0) 9771 6372633<br>Telefax: +49 (0) 9321 21457920<br>E-Mail: info@adites.de'
    }
  },
  {
    id: 4,
    title: {
      en: 'Register entry',
      de: 'Registereintrag',
      hr: 'Unos registra'
    },
    subtitle: null,
    content: {
      en: 'Entry in the commercial Register.<br>Registration court: District Court Schweinfurt<br>Registration number: HRB 7062',
      de: 'Eintragung im Handelsregister.<br>Registergericht: Amtsgericht Schweinfurt<br>Registernummer: HRB 7062',
      hr: 'Registracija u trgovačkom registru.<br>Sud za registraciju: Okružni sud u Švajnfurtu<br>Registracijski broj: #7062'
    }
  },
  {
    id: 5,
    title: {
      en: 'VAT',
      de: 'Umsatzsteuer',
      hr: 'Porez na promet'
    },
    subtitle: null,
    content: {
      en: 'Sales tax identification number according to §27 a of the Sales Tax Act:<br>DE299907153',
      de: 'Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>DE299907153',
      hr: 'Identifikacijski broj poreznog obveznika na promet prema zakonu o porezu na promet od 27 do 27:<br>DE299907153'
    }
  },
  {
    id: 6,
    title: {
      en: 'Settlement agreement',
      de: 'Streitschlichtung',
      hr: 'Rješavanje spora'
    },
    subtitle: null,
    content: {
      en: 'The European Commission provides a platform for online dispute resolution (OS):<br><a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>.<br>You will find our e-mail address at the top of the imprint.<br><br>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
      de: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br><a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>.<br>Unsere E-Mail-Adresse finden Sie oben im Impressum.<br><br>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      hr: 'Europska komisija pruža platformu za internetsko rješavanje sporova (OS):<br><a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>.<br>Naša adresa e-pošte navedena je na vrhu izlaza.<br><br>Nismo voljni niti obvezni sudjelovati u postupcima rješavanja sporova pred arbitražnim odborom potrošača.'
    }
  },
  {
    id: 7,
    title: null,
    subtitle: {
      en: 'Liability for content',
      de: 'Haftung für Inhalte',
      hr: 'Odgovornost za sadržaj'
    },
    content: {
      en: 'As a service provider, we are in accordance with § 7 para.1 TMG is responsible for its own content on these pages in accordance with general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.<br><br>Obligations to remove or block the use of information in accordance with general laws remain unaffected by this. However, liability in this regard is only possible from the moment of knowledge of a specific violation of the law. Upon notification of such violations, we will remove this content immediately.',
      de: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br><br>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
      hr: 'Kao davatelj usluga, odgovorni smo prema IE 7 (1) IE za vlastiti sadržaj na ovim stranicama u skladu s općim zakonima. Međutim, prema ie 8-10, mi kao pružatelj usluga nismo dužni nadzirati prenesene ili pohranjene podatke treće strane niti istraživati okolnosti koje ukazuju na nezakonite aktivnosti.<br><br>Obveze uklanjanja ili blokiranja korištenja informacija prema općim zakonima ostaju nepromijenjene. Međutim, odgovornost u vezi s tim moguća je samo od trenutka dobivanja informacija o određenom kršenju. Ako se sazna za relevantna kršenja, odmah ćemo ukloniti taj sadržaj.'
    }
  },
  {
    id: 8,
    title: null,
    subtitle: {
      en: 'Liability for links',
      de: 'Haftung für Links',
      hr: 'Odgovornost za veze'
    },
    content: {
      en: 'Our offer contains links to external websites of third parties on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.<br><br>However, a permanent content control of the linked pages is not reasonable without concrete evidence of a violation of the law. Upon notification of violations, we will remove such links immediately.',
      de: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br><br>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
      hr: 'Naša ponuda sadrži linkove na internetske stranice trećih strana čiji sadržaj ne kontroliramo. Stoga ne možemo biti odgovorni ni za ove materijale trećih strana. Odgovarajući dobavljač ili operater stranice uvijek je odgovoran za sadržaj povezanih stranica. Povezane stranice pregledane su zbog mogućih kršenja Zakona tijekom objavljivanja veza. Ilegalni sadržaj nije otkriven u vrijeme objavljivanja veze.<br><br>Međutim, stalna kontrola sadržaja povezanih stranica je nerazumna bez konkretnih dokaza o kršenju zakona. Ako se sazna za kršenje zakona, takve ćemo veze odmah ukloniti.'
    }
  },
  {
    id: 9,
    title: null,
    subtitle: {
      en: 'Copyright',
      de: 'Urheberrecht',
      hr: 'Autorsko pravo'
    },
    content: {
      en: 'The contents and works on these pages created by the site operators are subject to German copyright law. The duplication, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.<br><br>Insofar as the contents on this page were not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding note. Upon notification of violations, we will remove such content immediately.',
      de: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br><br>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
      hr: 'Sadržaj i djela koja su stvorili operateri stranica na ovim stranicama regulirani su njemačkim zakonom o autorskim pravima. Kopiranje, uređivanje, distribucija i svaka upotreba izvan autorskih prava zahtijevaju pismeni pristanak dotičnog autora ili tvorca. Stvoritelji. Preuzimanje i kopiranje ove stranice dopušteno je samo za privatnu nekomercijalnu upotrebu.<br><br>Ako sadržaj na ovoj stranici nije kreiran od strane operatera, poštuju se autorska prava trećih strana. Konkretno, sadržaj treće strane označen je kao takav. U svakom slučaju, ako postanete svjesni kršenja autorskih prava, molimo vas da pošaljete odgovarajuću obavijest. Čim se sazna za kršenje zakona, odmah ćemo ukloniti takav sadržaj.'
    }
  },
]

const translates = {
  en: { title: 'Masthead' },
  de: { title: 'Impressum' },
  hr: { title: 'Vrh jarbola' }
}

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })
</script>

<style lang="scss" scoped>
.masthead {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1rem;
  width: 100%;

  &-section {
    &-title {
      margin-bottom: 2rem;
      text-align: left;
    }

    &-subtitle {
      margin-bottom: 2rem;
      text-align: left;
      font-weight: 200;
    }

    &-content {
      max-width: 50rem;
    }
  }
}
</style>
