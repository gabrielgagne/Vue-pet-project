<template>
  <div>
    <router-link to="/settings" class="cog-animation">
      <icon-static svg-id="icon-cog" alt="Settings" />
    </router-link>
    <ul>
      <li is="MainMenuItem" navigate-to="/">
        <icon-static svg-id="icon-home" alt="Home" />
        Home
      </li>
      <li is="MainMenuItem" navigate-to="/lists">
        <icon-static svg-id="icon-list-numbered" alt="Lists" />
        Lists
      </li>
      <li is="MainMenuItem" navigate-to="/pro">
        <icon-static svg-id="icon-user" alt="Pro" />
        Pro
      </li>
      <li is="MainMenuItem" navigate-to="/settings">
        <icon-static svg-id="icon-cog" alt="Settings" />
        Settings
      </li>
      <li is="MainMenuItem" navigate-to="/about">
        <icon-static svg-id="icon-info" alt="About" />
        About
      </li>
    </ul>
  </div>
</template>

<script>
import MainMenuItem from 'components/MainMenu/MainMenuItem';
import IconStatic from 'components/Icons/IconStatic';

export default {
  components: {
    MainMenuItem,
    IconStatic
  },
  props: {}
};
</script>
<style lang="stylus" scoped>
</style>
