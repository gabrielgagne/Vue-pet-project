<template>
  <div>
    <h3>Hello {{ name }} from my Vue.js page, built with Webpack 4!</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <router-link to="/settings">Go to settings</router-link>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
