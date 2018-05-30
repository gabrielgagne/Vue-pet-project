<template>
  <div class="page-home">
    <section class="page-home__presentation">
      <h1>{{ "WebApp name" }}</h1>
      <span>{{ "Keep track of every frame" }}</span>
    </section>
    <welcome-message name="World" />
  </div>
</template>

<script>
import WelcomeMessage from 'components/WelcomeMessage/WelcomeMessage';

export default {
  components: {
    WelcomeMessage
  }
};
</script>

<style lang="stylus" scoped>
.page-home
  background-color white

  &__presentation
    display flex

  &__presentation-title
    font-size 4em
</style>
