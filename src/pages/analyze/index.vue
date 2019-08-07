<template lang="pug">
.analyze 
  nuxt-link(:to="{ name: 'analyze-player-playerId', params: { playerId: '0xfbA2C2bBF977eDA19Ad819Bb46787F4C91d1fFaD' }}") Look up
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.analyze {
  //temp
  padding: 2rem;
  a {
    color: black;
    font-weight: 400;
    text-decoration: none;
  }
}
</style>
