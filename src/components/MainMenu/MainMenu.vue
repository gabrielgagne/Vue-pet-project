<template>
  <div>
    <ul>
      <li is="MainMenuItem" navigate-to="/">Home</li>
      <li is="MainMenuItem" navigate-to="/lists">Lists</li>
      <li is="MainMenuItem" navigate-to="/pro">Pro</li>
      <li is="MainMenuItem" navigate-to="/settings">Settings</li>
      <li is="MainMenuItem" navigate-to="/about">About</li>
    </ul>
  </div>
</template>

<script>
import MainMenuItem from 'components/MainMenu/MainMenuItem';

export default {
  components: {
    MainMenuItem
  },
  props: {
  }
};
</script>

<style lang="stylus" scoped>

</style>
