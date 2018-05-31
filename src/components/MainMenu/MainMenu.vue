<template>
  <div v-click-outside="clicOutside" :class="{ opened }" class="main-menu">
    <span class="main-menu__header">
      <div class="main-menu__toggle-wrapper" @click="toggle()">
        <span class="main-menu__toggle-icon" />
      </div>
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
      console.log('TEST');
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
$menuToggleBarHeight = 5px
$menuToggleBarWidth = 3rem
$menuToggleBarSpacing = 10px

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
    transition all 0.4s ease
    border-radius $paddingBase
    fill $brand
    box-shadow 0 0 1px 1px $brand inset

  &__logo
    height $menuLogoSize
    width auto
    flex-grow 0
    margin-left 1rem

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
    font-size $fontSizeBig
    border-bottom 1px solid $light
    font-weight bolder
    transform-origin top 50%

    &:hover
      background-color darken($brand, 15%)

      a
        text-decoration none

    &:first-child
      border-top 1px solid $light
      margin-top $paddingBig

    a
      padding $paddingBase
      display block

    svg
      fill $dark
      margin-right $paddingBase

  .menu-enter-to, .menu-leave
    transform translateX(0)

    .main-menu__item
      transform rotateX(0deg)

  .menu-leave-to, .menu-enter
    transform translateX(- $menuWidth)

    .main-menu__item
      transform rotateX(90deg)

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

  &__toggle-wrapper
    height 'calc(2 * %s + 3 * %s)' % ($menuToggleBarSpacing $menuToggleBarHeight)
    width $menuToggleBarWidth
    display flex
    align-items center
    cursor pointer

  &__toggle-icon, &__toggle-icon:before, &__toggle-icon:after
    width $menuToggleBarWidth
    height $menuToggleBarHeight
    background $brand
    border-radius 5px
    transition 0.4s
    cursor pointer

  &__toggle-icon
    position relative
    border-radius 5px
    transition 0.6s

    &:before
      content ''
      position absolute
      transform 'translateY(-%s)' % $menuToggleBarSpacing

    &:after
      content ''
      position absolute
      transform 'translateY(%s)' % $menuToggleBarSpacing

    ^[0].opened &
      width 0px
      background-color $light

      &:before
        background-color $light
        transform rotate(45deg) translate(0px)

      &:after
        background-color $light
        transform rotate(-45deg) translate(0px)
</style>
