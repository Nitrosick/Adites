<template>
  <div class="about wrapper">
    <h1 class="page-title">ABOUT US</h1>
    <div class="about-team">
      <h2>ADITES – A team for your energy freedom!</h2>
      <div class="about-team-persons">
        <div class="person">
          <img
            src="@/assets/images/esau.jpeg"
            alt="photo"
            class="person-photo"
          >
          <h2 class="person-name">Dieter Esau</h2>
          <p class="person-description">
            Managing Partner<br>
            Sales, Marketing and Organization
          </p>
        </div>
        <div class="person">
          <img
            src="@/assets/images/erlich.jpeg"
            alt="photo"
            class="person-photo"
          >
          <h2 class="person-name">Alexei Erlich</h2>
          <p class="person-description">
            Managing partner<br>
            Technical manager, work preparation and controlling
          </p>
        </div>
        <div class="person">
          <img
            src="@/assets/images/person_placeholder.jpg"
            alt="photo"
            class="person-photo"
          >
          <h2 class="person-name">Artur Braun</h2>
          <p class="person-description">
            Head of Sales<br>
            Accounting, purchasing and controlling
          </p>
        </div>
      </div>
    </div>
    <div class="about-history">
      <h2 class="about-history-title">The company history of ADITES GmbH</h2>
      <h2 class="about-history-subtitle">...how it all began!</h2>
      <p class="about-history-text">
        The company's history begins in 2011 when Dieter Esau founded his sole proprietorship in the field of energy consulting. The focus of the advice was in the area of ​​electrical energy and renewable energies, especially photovoltaics. As early as 2012, Dieter Esau advised and trained large companies such as BELECTRIC GmbH on technical and legal issues.<br><br>
        In 2014, Alexei Erlich joined the business. His idea was to build plus-energy houses that run on solar power. A property development company was then founded in the form of a GbR, which also carries out electrical installations and photovoltaic systems and operates online trading.<br><br>
        <img
          src="@/assets/images/esau_1.jpg"
          alt="photo"
          class="about-history-photo"
        >
        At the end of 2014, we as Erlich&Esau GbR were able to acquire land for a construction project. At the same time, financing for a plus-energy settlement was approved. In February 2015 everything was ready to start the construction project, but then Erlich&Esau GbR received a lucrative offer:<br><br>
        The entire construction project is financed and redesigned and Erlich&Esau GbR can realize the idea of ​​building a plus-energy settlement relatively risk-free. All energy and electrical planning is carried out for the current project.<br><br>
        The company ADITES GmbH was founded in May 2015. The name comes from the Indian sun god Aditya. The purpose of the company remained the same as that of the company Erlich&Esau GbR, which was wound up in the same year.<br><br>
        Today, our young and successful entrepreneur is in a strong technological competitive position for the business areas of the future such as renewable energies and decentralized energy supply. Economy, ecology and social responsibility are at the forefront, especially in the areas of energy and building management.
      </p>
    </div>
  </div>
</template>

<script setup>

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
