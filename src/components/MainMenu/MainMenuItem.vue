<template>
  <router-link :to="navigateTo">
    <slot />
  </router-link >
</template>

<script>
export default {
  props: {
    navigateTo: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
