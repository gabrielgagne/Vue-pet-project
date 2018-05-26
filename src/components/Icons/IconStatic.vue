<template>
  <svg :alt="alt">
    <use v-attr="attrObj" :href="path" />
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
    path () {
      return `/static/icons/icons.svg#${this.svgId}`;
    },
    attrObj () {
      return {
        'xlink:href': this.path,
        'href': this.path
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
