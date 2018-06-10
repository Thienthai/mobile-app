<template>
  <f7-page name="services">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Services
      </f7-nav-title>
    </f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
<div class="card facebook-card">
  <div class="card-header">
    <div class="facebook-avatar"><img src="http://images.goodsmile.info/cgm/images/product/20170606/6486/45777/large/0f78fbdf148fd7d0da70b85ad091dd4d.jpg" width="34" height="34"></div>
    <div class="facebook-name">John Doe</div>
    <div class="facebook-date">Monday at 2:15 PM</div>
  </div>
  <div class="card-content">
    <div class="card-content-inner">
      <p>What a nice photo i took yesterday!</p>
      <img src="http://images.goodsmile.info/cgm/images/product/20170606/6486/45777/large/0f78fbdf148fd7d0da70b85ad091dd4d.jpg" width="100%">
      <p class="color-gray">Likes: 112    Comments: 43</p>
    </div>
  </div>
  <div class="card-footer">
    <a href="#" class="link">Like</a>
    <a href="#" class="link">Comment</a>
    <a href="#" class="link">Share</a>
  </div>
</div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      title: 'Services Page'
    };
  }
};
</script>
