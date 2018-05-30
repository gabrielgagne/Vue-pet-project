<template>
  <div v-click-outside="clicOutside" :class="{ opened }" class="main-menu">
    <span class="main-menu__header">
      <icon-static class="main-menu__toggle"
                   svg-id="icon-list"
                   alt="Menu"
                   @click.native="toggle()" />
      <router-link to="/" title="Home">
        <img class="main-menu__logo" src="/static/img/logo.png" >
      </router-link>
    </span>
    <transition :duration="{enter:800, leave: 400}" name="menu">
      <div v-show="opened" class="main-menu__container">
        <router-link to="/settings" class="main-menu__settings-icon cog-animation" title="Settings">
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
    toggle() {
      this.opened ? this.close() : this.open();
    },
    close() {
      this.opened = false;
      document.body.className = document.body.className.replace(
        'menu-opened',
        ''
      );
    },
    open() {
      this.opened = true;
      document.body.className = document.body.className + ' menu-opened';
    },
    // no coverage
    clicOutside(event) {
      if (event.button === 0) {
        this.close();
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
  z-index 998

  &__header
    position absolute
    top $menuTogglePosition
    left $menuTogglePosition
    z-index 999
    padding $menuTogglePaddingVertical $menuTogglePaddingHorizontal
    display flex
    align-items center
    transition: all .4s ease
    border-radius $paddingBase
    fill: $brand
    box-shadow: 0 0 1px 1px $brand inset

    ^[0].opened &
      fill: $light
      box-shadow: 0 0 1px 1px $light inset

  &__logo
    height $menuLogoSize
    width auto
    flex-grow 0
    margin-left 1rem

  &__toggle
    width $menuToggleSize
    height $menuToggleSize
    cursor pointer

  &__container
    position absolute
    height 100vh
    width $menuWidth
    display flex
    flex-direction column
    padding $layoutTopPadding 0
    background-color $brand

  &__settings-icon
    position absolute
    top $paddingBase
    right $paddingBase
    svg
      width $fontSizeBig * 1.5
      height $fontSizeBig * 1.5

  &__items
    display flex
    flex-direction column
    padding-left 0

  &__item
    font-size: $fontSizeBig
    border-bottom 1px solid $light
    fill $light
    font-weight bolder
    text-transform
    transform-origin top 50%

    &:hover
      background-color darken($brand, 15%)
      a
        text-decoration: none

    &:first-child
      border-top 1px solid $light
      margin-top $paddingBig

    a
      padding $paddingBase
      display block

    svg
      margin-right $paddingBase

  .menu-enter-to, .menu-leave
    transform translateX(0)

    .main-menu__item
      transform rotateX(0deg)
      //transform skewY(0deg)

  .menu-leave-to, .menu-enter
    transform translateX(- $menuWidth)

    .main-menu__item
      transform rotateX(90deg)
      //transform skewY(90deg)

  .menu-leave-active
    transition transform 0.4s

    .main-menu__item
      transition transform 0.2s

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
    transition transform 0.8s

    .main-menu__item
      transition transform 0.4s

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
