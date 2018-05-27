<template>
  <router-link :to="navigateTo" class="main-menu-item">
    <span>
      <icon-static :svg-id="icon" :alt="altText" /><slot />
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
</style>
