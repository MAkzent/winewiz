<template lang="pug">
  .landing
    .landing__text-wrapper
      .landing__header-wrapper
        p Have some
        .landing__header--wine.landing__header Wine🍷
        p with your
        .landing__header--cheeze.landing__header Cheeze 🧀
      .landing__description 
        span WineWiz is an open source analytics tool for 
        a Cheeze Wizards.
        p Consume and contribute at your own risk. 
    .landing__img-wrapper
      img.landing__img(src="~/assets/images/dashboard.png")
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: () => ({}),
  async beforeMount() {},
  methods: {
    async grabbingWiz() {
      this.$axios.setHeader('Content-Type', 'application/json')
      this.$axios.setHeader('x-api-token', `${process.env.ALCHEMY}`)
      this.$axios.setHeader('x-email', `${process.env.EMAIL}`)
      const res = await this.$axios.get(
        'https://cheezewizards.alchemyapi.io/wizards/'
      )
      return res
    }
  }
}
</script>

<style <style lang="scss" scoped>
@import '~/assets/styles/main.scss';
.landing {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;

  @media (min-width: $breakpoint) {
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 2rem;
  }

  &__text-wrapper {
    grid-auto-flow: row;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-row-gap: 1rem;
    padding: 3rem;
    cursor: default;
  }

  &__header {
    font-size: 4rem;
    font-weight: bold;

    &--wine {
      color: $color-port;
    }

    &--cheeze {
      color: $color-poppy;
    }

    &-wrapper {
      p {
        font-weight: bold;
        font-size: 2rem;
        color: $color-space;
        opacity: 0.8;
      }
    }
  }

  &__description {
    font-size: 1.2rem;
    font-weight: 500;
    align-self: end;
    color: $color-space;

    a {
      font-weight: bold;
      border-bottom: 3px solid $color-port;
      transition: 0.1s ease-in-out;
      &:hover {
        border-bottom: 3px solid lighten($color-port, 20);
        box-sizing: content-box;
        cursor: pointer;
      }
    }

    p {
      padding-top: 0.5rem;
    }
  }

  &__img {
    height: auto;
    width: 100%;
    min-width: 20rem;
    box-shadow: 1px 2px 4px rgba(black, 0.2);
    transition: 0.3s ease-in-out;

    &:hover {
      transform: translate(-0.5rem, -0.5rem);
    }

    &-wrapper {
      justify-self: end;
      align-self: end;
      padding: 2rem;
    }
  }
}
</style>
