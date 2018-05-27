<template>
  <svg :alt="alt">
    <use :href="path" :xlink:href="path" />
  </svg>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: ''
    },
    svgId: {
      type: String,
      required: true
    }
  },
  computed: {
    path() {
      return `/static/icons/icons.svg#${this.svgId}`;
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
