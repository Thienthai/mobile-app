<template>
  <f7-page>
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Test
      </f7-nav-title>
    </f7-navbar>
<!--     <f7-block-title>{{ title }}</f7-block-title> -->
    <f7-block inner>
        <h1>Test</h1>
        <p><a class="link popup-open" href="#" data-popup=".popup-about">Open About Popup</a></p>
        <p><a class="link popup-open" href="#" data-popup=".popup-test">Open Test</a></p>
          <div class="popup popup-about">
            <div class="block">
              <p>About</p>
              <!-- Close Popup -->
              <p><a class="link popup-close" href="#">Close popup</a></p>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div class="popup popup-test">
            <div class="block">
              <p>About</p>
              <!-- Close Popup -->
              <p><a class="link popup-close" href="#">Close popup</a></p>
              <p>This is the test popuop.</p>
            </div>
          </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name: 'TestCom',
  data() {
    return {
      user: this.$store.state.user,
      move: "movethis"
    };
  },
  methods: {
    work: function () {
      console.log(this.$store.state.user)
    }
  }
}
</script>