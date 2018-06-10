<template>
  <f7-page name="about">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        About
      </f7-nav-title>
    </f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      <div v-for="item in 5">
      <div class="card demo-card-header-pic">
        <div style="background-image:url(http://images.goodsmile.info/cgm/images/product/20170606/6486/45777/large/0f78fbdf148fd7d0da70b85ad091dd4d.jpg)" class="card-header align-items-flex-end">Journey To Mountains</div>
        <div class="card-content card-content-padding">
          <p class="date">Posted on January 21, 2015</p>
          <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
        </div>
        <div class="card-footer"><a @click.stop="openPhotoBrowser" href="#" class="link">More Picture</a></div>
      </div>
      </div>
        <!-- Photo Browser -->
      <f7-photo-browser
        ref="pb"
        :photos="photos"
        theme="dark"
        @open="onOpen"
      ></f7-photo-browser>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      title: 'About Page',
      photos: [
        {
          url: 'http://images.goodsmile.info/cgm/images/product/20170606/6486/45777/large/0f78fbdf148fd7d0da70b85ad091dd4d.jpg',
          caption: 'Picture1'
        }
      ]
    };
  },
  methods: {
      openPhotoBrowser: function () {
        this.$refs.pb.open();
      }
    }
};
</script>
