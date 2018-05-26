<template>
  <div>
    <router-link to="/settings" class="cog-animation">
      <icon-base>
        <icon-cog />
      </icon-base>
    </router-link>
    <ul>
      <li is="MainMenuItem" navigate-to="/">
        <icon-base>
          <icon-home />
        </icon-base>
        Home
      </li>
      <li is="MainMenuItem" navigate-to="/lists">
        <icon-base>
          <icon-numbered-list />
        </icon-base>
        Lists
      </li>
      <li is="MainMenuItem" navigate-to="/pro">
        <icon-base>
          <icon-user />
        </icon-base>
        Pro
      </li>
      <li is="MainMenuItem" navigate-to="/settings">
        <icon-base>
          <icon-cog />
        </icon-base>
        Settings
      </li>
      <li is="MainMenuItem" navigate-to="/about">
        <icon-base>
          <icon-info />
        </icon-base>
        About
      </li>
    </ul>
  </div>
</template>

<script>
import MainMenuItem from 'components/MainMenu/MainMenuItem';
import IconBase from 'components/Icons/IconBase';
import IconCog from 'components/Icons/IconCog';
import IconUser from 'components/Icons/IconUser';
import IconInfo from 'components/Icons/IconInfo';
import IconNumberedList from 'components/Icons/IconNumberedList';
import IconHome from 'components/Icons/IconHome';

export default {
  components: {
    MainMenuItem,
    IconBase,
    IconCog,
    IconUser,
    IconInfo,
    IconNumberedList,
    IconHome
  },
  props: {}
};
</script>
<style lang="stylus" scoped>
</style>
