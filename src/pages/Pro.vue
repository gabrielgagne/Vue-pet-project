<template>
  <div class="full-width center-content">
    <img src="/static/img/logo.png" >
    <welcome-message name="pro" />
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
