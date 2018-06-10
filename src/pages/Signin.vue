<template>
  <f7-page>
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Sign In
      </f7-nav-title>
    </f7-navbar>
<!--     <f7-block-title>{{ title }}</f7-block-title> -->
    <f7-block inner>
        <sign-in-form></sign-in-form>
    </f7-block>
  </f7-page>
</template>
<script>
import SigninForm from '../components/SigninForm';
export default {
  name: 'Home',
  components: {
    'sign-in-form': SigninForm
  },
  data() {
    return {
      title: 'Hello Worldsaaa',
    };
  }
};
</script>
