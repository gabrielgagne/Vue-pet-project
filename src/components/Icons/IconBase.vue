<template>
  <svg :width="width" :height="height" :aria-labelledby="iconName"
       viewBox="0 0 16 16"
       xmlns="http://www.w3.org/2000/svg"
       role="presentation"
       preserveAspectRatio="xMinYMin">
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 16
    },
    height: {
      type: [Number, String],
      default: 16
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
