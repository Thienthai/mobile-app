<template>
        <test-com></test-com>
</template>

<script>
import TestCom from '../components/TestCom';
export default {
  name: 'Test',
  components: {
    'test-com': TestCom
  },
  data() {
    return {
      title: 'Hello Worldsaaa',
      move: TestCom.data
    };
  }
};
</script>