<template lang="pug">
.pageHeader
  .pageHeader__title Wine Wiz 🍷
  section
    nuxt-link.pageHeader__nav-item(
      :to="link.path" 
      v-for="(link, index) in links" 
      :key="index"
    ) {{link.name}}
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Analyze',
        path: '/analyze'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';
.pageHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  background-color: $color-space;
  color: $color-cream;

  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    padding-right: 2rem;
  }

  &__nav-item + &__nav-item {
    margin-left: 1rem;
  }

  &__nav-item {
    text-decoration: none;
    font-weight: 300;
    transition: 0.3s ease-in-out;
    color: $color-cream;

    &:hover {
      cursor: pointer;
      color: lighten($color-cream, 10);
    }
  }
}
</style>
