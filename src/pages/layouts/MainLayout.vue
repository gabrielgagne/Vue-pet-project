<template>
  <div id="page-layout">
    <main-menu />
    <div class="main-content">
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
