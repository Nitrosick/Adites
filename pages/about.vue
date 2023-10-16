<template>
  <div class="about wrapper">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <div class="about-team">
      <h2 v-html="translates[ln].subtitle" />
      <div class="about-team-persons">
        <div
          v-for="person in persons"
          :key="person.id"
          class="person"
        >
          <img
            :src="person.photo ? `/images/persons/${person.photo}` : '/images/persons/person_placeholder.jpg'"
            alt="photo"
            class="person-photo"
          >
          <h2
            class="person-name"
            v-html="person.name"
          />
          <p
            class="person-description"
            v-html="person.position[ln]"
          />
        </div>
      </div>
    </div>
    <div class="about-history">
      <h2
        class="about-history-title"
        v-html="translates[ln].historyTitle"
      />
      <h2
        class="about-history-subtitle"
        v-html="translates[ln].historySubtitle"
      />
      <p class="about-history-text">
        <span v-html="translates[ln].history[0]" />
        <img
          src="/images/persons/esau_1.jpg"
          alt="photo"
          class="about-history-photo"
        >
        <span v-html="translates[ln].history[1]" />
      </p>
    </div>
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const persons = [
  { id: 1, photo: 'esau.jpeg', name: 'Dieter Esau', position: {
    en: 'Managing Partner<br>Sales, Marketing and Organization',
    de: 'Geschäftsführender Gesellschafter<br>Vertrieb, Marketing und Organisation',
    hr: 'Upravljački partner u prodaji<br>marketingu i organizaciji'
  } },
  { id: 2, photo: 'erlich.jpeg', name: 'Alexei Erlich', position: {
    en: 'Managing partner<br>Technical manager, work preparation and controlling',
    de: 'Geschäftsführender Gesellschafter<br>Technischer Leiter, Arbeitsvorbereitung und Controlling',
    hr: 'Upravljački partner<br>Tehnički voditelj za pripremu i kontrolu rada'
  } },
  { id: 3, photo: null, name: 'Artur Braun', position: {
    en: 'Head of Sales<br>Accounting, purchasing and controlling',
    de: 'Buchhaltung<br>Einkauf und Controlling',
    hr: 'Voditelj prodaje<br>Računovodstva, nabave i kontrole'
  } }
]

const translates = {
  en: {
    title: 'About Us',
    subtitle: 'ADITES – A team for your energy freedom!',
    historyTitle: 'The company history of ADITES GmbH',
    historySubtitle: '...how it all began!',
    history: [
      "The company's history begins in 2011 when Dieter Esau founded his sole proprietorship in the field of energy consulting. The focus of the advice was in the area of ​​electrical energy and renewable energies, especially photovoltaics. As early as 2012, Dieter Esau advised and trained large companies such as BELECTRIC GmbH on technical and legal issues.<br><br>In 2014, Alexei Erlich joined the business. His idea was to build plus-energy houses that run on solar power. A property development company was then founded in the form of a GbR, which also carries out electrical installations and photovoltaic systems and operates online trading.<br><br>",
      'At the end of 2014, we as Erlich&Esau GbR were able to acquire land for a construction project. At the same time, financing for a plus-energy settlement was approved. In February 2015 everything was ready to start the construction project, but then Erlich&Esau GbR received a lucrative offer:<br><br> The entire construction project is financed and redesigned and Erlich&Esau GbR can realize the idea of ​​building a plus-energy settlement relatively risk-free. All energy and electrical planning is carried out for the current project.<br><br>The company ADITES GmbH was founded in May 2015. The name comes from the Indian sun god Aditya. The purpose of the company remained the same as that of the company Erlich&Esau GbR, which was wound up in the same year.<br><br>Today, our young and successful entrepreneur is in a strong technological competitive position for the business areas of the future such as renewable energies and decentralized energy supply. Economy, ecology and social responsibility are at the forefront, especially in the areas of energy and building management.'
    ]
  },
  de: {
    title: 'Über Uns',
    subtitle: 'ADITES – Ein team für ihre energiefreiheit!',
    historyTitle: 'Die Firmengeschichte der ADITES GmbH',
    historySubtitle: '...wie alles began!',
    history: [
      'Die Firmengeschichte beginnt im Jahr 2011 als Dieter Esau sein Einzelunternehmen im Bereich der Energieberatung gründet. Der Schwerpunkt der Beratung lag im Bereich der elektrischen Energie und der erneuerbaren Energien, insbesondere Photovoltaik. Bereits im Jahr 2012 hat Dieter Esau große Firmen wie BELECTRIC GmbH mit technischen und rechtlichen Sachverhalten beraten und geschult.<br><br>Im Jahr 2014 kam Alexei Erlich in das geschäftliche Geschehen hinzu. Seine Idee war es, Plus-Energie-Häuser zu bauen, die mit Solarstrom betrieben werden. Daraufhin wurde eine Bauträgergesellschaft in Form einer GbR gegründet, die zusätzlich Elektroinstallation und Photovoltaikanlagen ausführt, sowie Internethandel betreibt.',
      'Ende 2014 konnten wir als Erlich&Esau GbR ein  Grundstück für ein Bauprojekt erwerben. Parallel dazu wurde die Finanzierung für eine  Plus-Energie-Siedlung genehmigt. Im Februar 2015 war alles soweit, um das Bauvorhaben zu starten, doch dann bekam Erlich&Esau GbR ein lukratives Angebot:<br><br>Das gesamte Bauvorhaben wird finanziert und umgestaltet und Erlich&Esau GbR kann relativ risikofrei die Idee, Bau einer Plus-Energie-Siedlung, zu verwirklichen. Die gesamte energetische und elektrische Planung wird für das aktuelle Projekt übernommen.<br><br>Im Mai 2015 wird das Unternehmen ADITES GmbH gegründet. Die Namensgebung entspringt dem indischen Sonnengott Aditya. Der Unternehmenszweck blieb der gleiche wie auch bei der Unternehmung Erlich&Esau GbR, die im gleichen Jahr abgewickelt wurde.<br><br>Heute befindet sich unseres junges und erfolgreiches  Unternehmer in einer starken  technologischen Wettbewerbsposition für die Geschäftsfelder der Zukunft wie etwa die regenerativen Energien und die dezentrale Energieversorgung. Ökonomie, Ökologie und gesellschaftliche Verantwortung steht im Vordergrund, besonders in den Bereichen Energie- und Gebäudemanagement.'
    ]
  },
  hr: {
    title: 'O Nama',
    subtitle: 'ADITES – Tim za vašu energetsku slobodu!',
    historyTitle: 'Povijest tvrtke ADITES GmbH',
    historySubtitle: '...kako je sve počelo!',
    history: [
      'Povijest tvrtke počinje 2011.godine, kada je Dieter Isau osnovao svoje samostalno poduzeće u području energetskog savjetovanja. Fokus savjetovanja bio je na području električne energije i obnovljivih izvora energije, posebno fotonaponskih. Još 2012.godine Dieter Isau savjetovao je i obučavao velike tvrtke poput AIK-a o tehničkim i pravnim pitanjima.<br><br>2014.godine Aleksej Ehrlich pridružio se poslu. Njegova je ideja bila izgraditi kuće s povećanom energijom na solarni pogon. Tada je osnovana tvrtka za razvoj nekretnina u obliku MK, koja se također bavi električnim i fotonaponskim sustavima i obavlja internetsku trgovinu.<br><br>',
      'Krajem 2014.godine, mi smo, kao A&A, mogli kupiti zemljište za provedbu građevinskog projekta. Istodobno je odobreno financiranje projekta "Plus-energija". U veljači 2015.sve je bilo spremno za početak gradnje, ali tada je tvrtka Ame&Ame dobila povoljnu ponudu:<br><br>Cijeli građevinski projekt financiran je i redizajniran, a Ame&Ame može realizirati ideju izgradnje naselja s pozitivnom energijom relativno bez rizika. Sve energetsko i električno planiranje provodi se za tekući projekt.<br><br>Tvrtka M. A. osnovana je u svibnju 2015. Ovo ime potječe od imena indijskog boga Sunca Aditije. Cilj tvrtke ostao je isti kao i tvrtka M&M koja je osnovana iste godine.<br><br>Danas naš mladi i uspješni poduzetnik zauzima snažnu tehnološku konkurentsku poziciju u budućim poslovnim područjima kao što su obnovljivi izvori energije i decentralizirana opskrba energijom. Gospodarstvo, ekologija i društvena odgovornost su u prvom planu, posebno u energetici i upravljanju zgradama.'
    ]
  }
}

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  padding: 2rem 1rem;

  &-team {
    padding: 3rem 0;

    &-persons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 2rem;
    }
  }

  &-history {
    padding-top: 3rem;
    border-top: 2px solid $color-grey-3;

    &-title {
      text-align: left;
    }

    &-subtitle {
      margin: 1rem 0 2rem 0;
      text-align: left;
    }

    &-photo {
      float: right;
      width: 25rem;
      margin: 0.5rem 0 0.5rem 1rem;
    }
  }
}

.person {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 15rem;

  &-photo {
    width: 100%;
  }

  &-name {
    text-align: left;
  }
}

@include breakpoint-md {
  .about {
    &-history {
      &-photo {
        width: 100%;
        margin: 0.5rem 0;
      }
    }
  }
}
</style>
