<template>
	      <form>
            <div class="list">
              <ul>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Email</div>
                    <div class="item-input-wrap">
                      <input v-model="email" type="text" name="email" placeholder="Your email">
                    </div>
                    <div class="item-after">
                        
                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input v-model="password" type="password" name="password" placeholder="Your password">
                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-after">
                      <span style="fontSize:13px">{{ error }}</span>
                    </div>
                   </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li><a @click.stop="userSignIn()" class="item-link list-button" href="#">Sign In</a></li>
                <li><a class="item-link list-button" href style="color: #cc0000">Forgot Password</a></li>
                <li><a class="item-link list-button" href="#">Sign Up</a></li>
              </ul>
            </div>
          </form>
</template>

<script>
import {store} from '../store';
export default {
  name: 'FormSignin',
  data() {
    return {
      title: 'Hello Worldsaaa',
      email: "",
      password: "",
      error: store.state.error
    };
  },
  methods: {
    userSignIn () {
      console.log(this.$store)
      store.dispatch('userSignIn', { email: this.email, password: this.password, f7: this.$f7})
    }
  },
  computed: {
    error () {
      return store.state.error
    },
    loading () {
      return store.state.loading
    }
  },
  watch: {
    error (value) {
      if (value) {
        this.alert = true
      }
    },
    alert (value) {
      if (!value) {
        store.commit('setError', null)
      }
    }
  }
};
</script>