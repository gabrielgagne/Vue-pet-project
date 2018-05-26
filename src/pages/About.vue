<template>
  <div>
    <MainMenu />
    <div class="full-width center-content">
      <img src="/static/img/logo.png" >
      <welcome-message name="about" />
    </div>
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
