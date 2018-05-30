<template>
  <div class="page-home">
    <section class="page-home__presentation">
      <h1 class="page-home__presentation-title">{{ "WebApp name" }}</h1>
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
@import 'nib'
.page-home
  background linear-gradient(top, $grey, $dark);
  clearfix()
  border-radius: 1px 2px / 3px 4px;

  &__presentation
    display flex
    flex-direction column
    align-items center

  &__presentation-title
    font-size 4em
</style>
