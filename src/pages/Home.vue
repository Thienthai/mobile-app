<template>
  <about-com></about-com>
</template>

<script>
import {store} from '../store';
import About from '../components/Home';
export default {
  name: 'About',
  components: {
    'about-com': About
  },
  data() {
    return {
      title: 'About Page',
      user: store.state.user,
      mmkk: this.$store.state.user,
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
