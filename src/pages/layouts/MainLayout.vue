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
@import 'animations'

.main-layout
  display flex
  justify-content center
  min-height 100v
  fade-scale-animation()

  &__content
    padding $layoutTopPadding $menuTogglePosition
</style>
