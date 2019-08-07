<template lang="pug">
.player
  .player__header 
    .player__section Wizards
      .player__section__divider
    h4 ID {{playerId}}
  .player__wizards
    nuxt-link.player__wizards__details(
      :to="{ name: 'analyze-wizard-wizId', params: { wizId: wizard.tokenId }}"
      v-for="wizard in ownedWizards"
      :key="wizard.tokenId"
    )
      img(:src="getWizardImageUrl(wizard.tokenId)")


</template>

<script>
export default {
  data: () => ({
    player: {}
  }),
  computed: {
    playerId() {
      return this.$route.params.playerId || 0
    },
    ownedWizards() {
      return this.player.wizards || []
    }
  },
  beforeMount() {
    this.player = this.$wizardListService.getPlayer(this.playerId)
  },
  methods: {
    getWizard(wizId) {
      return this.$wizardListService.getWizard(wizId)
    },
    getWizardImageUrl(wizId) {
      return `https://storage.googleapis.com/cheeze-wizards-production/0xec2203e38116f09e21bc27443e063b623b01345a/${wizId}.svg`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';
.player {
  &__header {
    @extend %row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 1rem 2rem;
    a {
      color: white;
      text-decoration: none;
    }
  }

  &__wizards {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fill, 160px);
    grid-gap: 2rem;

    &__details {
      img {
        width: 100%;
      }
    }
  }

  &__section {
    font-size: 1.6rem;
    font-weight: 500;
    &__divider {
      width: 8rem;
      border-bottom: 4px solid $color-port;
    }
  }
}
</style>
