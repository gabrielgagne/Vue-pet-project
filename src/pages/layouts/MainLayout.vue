<template>
  <div class="main-layout">
    <main-menu />
    <div class="main-layout__content">
      <router-view v-if="!isRoot" />
      <home v-if="isRoot" />
    </div>
  </div>
</template>

<script>
import MainMenu from 'components/MainMenu/MainMenu';
import Home from 'pages/Home';

export default {
  components: {
    MainMenu,
    Home
  },
  computed: {
    isRoot () {
      return this.$route.path === '/';
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-layout
  padding-top $layoutTopPadding
</style>
