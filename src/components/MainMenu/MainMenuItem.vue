<template>
  <router-link :to="navigateTo" class="main-menu-item">
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
  color inherit
  &__wrapper
    display flex
    align-items center

  &__icon
    margin-right $paddingBase
</style>
