<template>
  <div class="main-layout">
    <main-menu />
    <transition name="fade-page" mode="out-in" appear>
      <router-view v-if="!isRoot" class="main-layout__content"/>
      <home v-if="isRoot" class="main-layout__content" />
    </transition>
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
    isRoot() {
      return this.$route.path === '/';
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-layout
  padding $layoutTopPadding $paddingSmall
  display flex
  justify-content center
  border 1px solid black
  min-height 100vh

  .fade-page-leave-active, .fade-page-enter-active
    transition transform 0.3s ease-out, opacity 0.2s ease-out
    transform-origin: 50% 50%

  .fade-page-enter-to, .fade-page-leave
    transform: scale(1)
    opacity 1

  .fade-page-enter
    transform scale(1.25)
    opacity 0.2

  .fade-page-leave-to
    transform scale(0.75)
    opacity 0.2

</style>
