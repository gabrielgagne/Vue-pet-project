<template>
  <router-link :to="navigateTo" :title="altText" class="main-menu-item">
    <span class="main-menu-item__wrapper">
      <icon-static :svg-id="icon" :alt="altText" class="main-menu-item__icon" /><slot />
    </span>
  </router-link>
</template>

<script>
import IconStatic from 'components/Icons/IconStatic';
export default {
  components: {
    IconStatic
  },
  props: {
    navigateTo: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-menu-item
  color $light
  text-decoration none
  padding $paddingBase
  display block

  &__wrapper
    display flex
    align-items center

  &__icon
    fill $light
    margin-right $paddingBase

  &:hover
    text-decoration none
</style>
