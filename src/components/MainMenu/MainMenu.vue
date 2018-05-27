<template>
  <div v-click-outside="close" class="main-menu">
    <icon-static class="main-menu__toggle"
                 svg-id="icon-list"
                 alt="Menu"
                 @click.native="toggle()" />
    <transition :duration="{enter:800, leave: 400}" name="menu">
      <div v-show="opened" class="main-menu__container">
        <router-link to="/">
          <img class="main-menu__logo" src="/static/img/logo.png" >
        </router-link>
        <router-link to="/settings" class="main-menu__settings-icon cog-animation">
          <icon-static svg-id="icon-cog" alt="Settings" />
        </router-link>
        <ul class="main-menu__items">
          <li v-for="item in menuItems" :key="item.link" class="main-menu__item">
            <main-menu-item :navigate-to="item.link" :alt-text="item.text" :icon="item.icon">{{ item.text }}</main-menu-item>
          </li>
        </ul>
      </div>
    </transition>
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
  props: {},
  data() {
    return {
      opened: false,
      menuItems: [
        { link: '/', icon: 'icon-home', text: 'Home' },
        { link: '/lists', icon: 'icon-list-numbered', text: 'Lists' },
        { link: '/pro', icon: 'icon-user', text: 'Pro' },
        { link: '/settings', icon: 'icon-cog', text: 'Settings' },
        { link: '/about', icon: 'icon-info', text: 'About' }
      ]
    };
  },
  watch: {
    '$route.path': function(path) {
      this.close();
    }
  },
  methods: {
    toggle: function() {
      this.opened = !this.opened;
    },
    close: function() {
      if (this.opened) {
        this.opened = false;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.main-menu
  position fixed
  top 0
  left 0

  &__toggle
    position absolute
    top $menuTogglePosition
    left $menuTogglePosition
    width $menuToggleSize
    height $menuToggleSize
    cursor pointer
    z-index 999

  &__container
    position absolute
    z-index 998
    height 100vh
    width 350px
    display flex
    flex-direction column
    padding 'calc(%s + %s * 2)' % ($menuToggleSize $menuTogglePosition) 0
    background-color lightgreen

  &__logo
    flex-grow 0
    width auto
    height 100px
    width 100px

  &__settings-icon
    position absolute
    top $paddingSmall
    right $paddingSmall
    fill $someColor

  &__items
    display flex
    flex-direction column
    padding-left 0

  &__item
    padding $paddingSmall
    background-color lightgreen
    transform-origin top left

    a
      display block

    svg
      margin-right $paddingBase

  .menu-enter-to, .menu-leave
    opacity 1

    .main-menu__item
      transform rotate(0deg)

  .menu-leave-to, .menu-enter
    opacity 0

    .main-menu__item
      transform rotate(150deg)

  .menu-leave-active
    transition opacity .4s

    .main-menu__item
      transition transform .2s

      &:nth-child(1)
        transition-delay 0.2s

      &:nth-child(2)
        transition-delay 0.15s

      &:nth-child(3)
        transition-delay 0.1s

      &:nth-child(4)
        transition-delay 0.05s

      &:nth-child(5)
        transition-delay 0s

  .menu-enter-active
    transition opacity .8s

    .main-menu__item
      transition transform .4s

      &:nth-child(1)
        transition-delay 0s

      &:nth-child(2)
        transition-delay 0.1s

      &:nth-child(3)
        transition-delay 0.2s

      &:nth-child(4)
        transition-delay 0.3s

      &:nth-child(5)
        transition-delay 0.4s
</style>
