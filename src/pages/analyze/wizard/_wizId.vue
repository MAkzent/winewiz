<template lang="pug">
.wizard
  .wizard__header 
    .wizard__header__back(@click='$router.back()') 
      h4 < Back
    h4 ID {{wizId}}
  .wizard__details
    .wizard__details__img
      img(:src="wizardImageUrl")
    .wizard__details__info
      span Affinity:
      span {{ wizard.affinity }}
      span Owner:
      span {{ wizard.owner }}
      span Power:
      span {{ wizard.power }}
</template>

<script>
export default {
  data: () => ({
    wizard: {}
  }),
  computed: {
    wizId() {
      return this.$route.params.wizId || 0
    },
    wizardImageUrl() {
      return `https://storage.googleapis.com/cheeze-wizards-production/0xec2203e38116f09e21bc27443e063b623b01345a/${this.wizId}.svg`
    }
  },
  async beforeMount() {
    this.$axios.setHeader('Content-Type', 'application/json')
    this.$axios.setHeader('x-api-token', `${process.env.ALCHEMY}`)
    this.$axios.setHeader('x-email', `${process.env.EMAIL}`)
    await this.getWizard()
  },
  methods: {
    async getWizard() {
      const { data } = await this.$axios.get(
        `${process.env.CWAPIBASE}wizards/${this.wizId}`
      )
      return (this.wizard = data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';
.wizard {
  &__header {
    @extend %row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 1rem 2rem;

    &__back {
      &:hover {
        color: lighten(black, 5);
        cursor: pointer;
      }
    }
  }

  &__details {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-column-gap: 1em;

    &__img {
      @extend %col;
      img {
        max-width: 320px;
      }
    }
    &__info {
      margin: auto 0;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 0.5rem;
    }
  }
}
</style>
