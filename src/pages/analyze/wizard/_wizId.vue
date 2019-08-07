<template lang="pug">
.wizard
  .wizard__header 
    .wizard__header__back(@click='$router.back()') 
      h4 < Back
    h4 ID {{wizId}}
  .wizard__details
    img(:src="wizardImageUrl")
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
  beforeMount() {
    this.wizard = this.$wizardListService.getWizard(this.wizId)
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
    img {
      max-width: 320px;
    }
  }
}
</style>
