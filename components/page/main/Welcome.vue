<template>
  <div class="welcome wrapper">
    <div class="welcome-text">
      <div class="welcome-text-title">
        <h2>Welcome to ADITES</h2>
        <h2 class="green">with us SIMPLY energy freedom</h2>
      </div>
      <div class="welcome-item">
        <img
          src="@/assets/images/sunrize.jpg"
          alt="sunrize"
        >
        <p class="welcome-item-content">
          Why photovoltaics?<br><br>
          - Your path to energy freedom - You protect the
          environment - High and long-term returns
          - Protection against rising electricity
          prices - Increase in the value of your real estate
        </p>
      </div>
      <div class="welcome-item">
        <img
          src="@/assets/images/energy.png"
          alt="energy"
        >
        <p class="welcome-item-content">
          Why with us?<br><br>
          - Complete offer including assembly and
          registration - Reliable installation -
          Transparency - Systems of all sizes - private
          or commercial
        </p>
      </div>
    </div>
    <div class="welcome-image" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.welcome {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem 1rem;

  &-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &-title {
      h2 {
        text-align: left;
      }

      .green {
        color: $color-green-1;
        margin-top: 1rem;
      }
    }
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 2rem;

    &-content {
      font-size: $font-size-lg;
      line-height: 1.3rem;
    }
  }

  &-image {
    min-height: 35rem;
    background: url(/assets/images/transport.webp) left bottom / cover no-repeat;
  }
}
</style>
