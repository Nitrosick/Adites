<template>
  <div class="about">
    <div class="about-content wrapper">
      <h2>WE ARE HERE FOR YOU</h2>
      <h2 class="green">from advice to implementation</h2>
      <div class="about-points">
        <div class="about-points-item">
          <div class="about-points-icon">
            <img
              src="@/assets/images/handshake.png"
              alt="about icon"
            >
          </div>
          <h3>Advice</h3>
          <p class="about-points-description">
            Comprehensive and professional advice on often complex topics is very important to us.
            Our goal is to develop the best possible solution for your building technology.
            In doing so, we primarily take into account the major advantages of energy-saving technologies
            and renewable energies and integrate these into your building planning as far as possible.
          </p>
        </div>
        <div class="about-points-item">
          <div class="about-points-icon">
            <img
              src="@/assets/images/pencil.png"
              alt="about icon"
            >
          </div>
          <h3>Planning</h3>
          <p class="about-points-description">
            The art of using all the technologies sensibly in existing or new buildings lies in careful planning.
            It goes into energy generation (photovoltaics), energy management (power-controlled circuits),
            energy monitoring (smart home) and standard-compliant energy distribution (electrical installation).
          </p>
        </div>
        <div class="about-points-item">
          <div class="about-points-icon">
            <img
              src="@/assets/images/search.png"
              alt="about icon"
            >
          </div>
          <h3>Implementation</h3>
          <p class="about-points-description">
            Taking into account the latest regulations, our qualified employees will transform your house into an "intelligent" and energy-optimized house.
            We take care of the complete installation of the building technology and electrical installation for you and tailor it perfectly to your wishes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about {
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }

  .green {
    color: $color-green-1;
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
</style>
