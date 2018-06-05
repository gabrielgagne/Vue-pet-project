<template>
  <div class="page-home">
    <section class="page-home__presentation">
      <div class="page-home__catch">
        <h1 class="page-home__catch-title">{{ "WebApp name" }}</h1>
        <span class="page-home__catch-phrase">{{ "Keep track of every frame" }}</span>
      </div>
      <div class="page-home__login">
        <button>Login</button>
        <button>Signup</button>
      </div>
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
  background linear-gradient(top, $grey, $dark)
  clearfix()
  border-radius 1px 2px / 3px 4px

  &__presentation
    display flex
    flex-direction row
    flex-wrap wrap
    align-items center

  &__catch, &__login
    display flex
    flex 1 1 auto
    min-width 450px

  &__catch
    flex-direction column

  &__catch-title
    font-size 4em

  &__login
    justify-content center
</style>
