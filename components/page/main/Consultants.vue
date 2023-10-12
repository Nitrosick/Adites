<template>
  <div class="consultants">
    <div class="consultants-background" />
    <div class="consultants-content wrapper">
      <h2 class="consultants-title">
        Our solar consultants in your region
      </h2>
      <div class="persons">
        <div class="persons-item">
          <img
            src="@/assets/images/vilvovskiy.jpg"
            alt="photo"
            class="persons-item-photo"
          >
          <span class="persons-item-name">
            Ilya Vilvovskiy
          </span>
          <span class="persons-item-contacts">
            from Amberg +49 (0) 151 68565004 ilya.vilvovskiy@adites.de
          </span>
        </div>
        <div class="persons-item">
          <img
            src="@/assets/images/dambrowski.jpg"
            alt="photo"
            class="persons-item-photo"
          >
          <span class="persons-item-name">
            Kevin Dambrowski
          </span>
          <span class="persons-item-contacts">
            from Nuremberg +49 (0) 174 9544379 KevinDambrowski@gmail.com
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.consultants {
  position: relative;
  background: url(/assets/images/background_1.jpg) center / cover no-repeat;

  &-background {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10rem;
    width: 100%;
    background-color: $color-white;
    z-index: 1;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem 1rem 4rem 1rem;
  }

  &-title {
    color: $color-white;
    margin-bottom: 2rem;
  }
}

.persons {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 2;

  &-item {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    max-width: 27rem;
    padding: 2rem;
    background-color: $color-white;
    box-shadow: $shadow;

    &-photo {
      width: 100%;
    }

    &-name {
      text-align: center;
      font-size: $font-size-xl;
    }

    &-contacts {
      text-align: center;
      font-size: $font-size-lg;
    }
  }
}
</style>
