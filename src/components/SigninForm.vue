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
                      <span dismissible v-model="alert" style="fontSize:13px">{{ error }}</span>
                    </div>
                   </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li><a @click.stop="userSignIn()" class="item-link list-button" href="#">Sign In</a></li>
                <li><a class="item-link list-button link popup-open" data-popup=".popup-forgot" href style="color: #cc0000">Forgot Password</a></li>
                <li><a class="item-link list-button link popup-open" data-popup=".popup-signup" href="#">Sign Up</a></li>
              </ul>
            </div>
            <div class="popup popup-forgot">
              <div class="block">
                <!-- Close Popup -->
                <p><a class="link popup-close" href="#">Close popup</a></p>
                <form>
                  <div class="list">
                    <ul>
                      <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Email</div>
                          <div class="item-input-wrap">
                            <input v-model="forgot" type="text" name="email" placeholder="Your email">
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="list">
                    <ul>
                      <li><a @click.stop="forgotPass()" class="item-link list-button" href="#">Submit</a></li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <div class="popup popup-signup">
              <div class="block">
                <!-- Close Popup -->
                <p><a class="link popup-close" href="#">Close popup</a></p>
                <form>
                  <div class="list">
                    <ul>
                      <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Email</div>
                          <div class="item-input-wrap">
                            <input v-model="emailSignup" type="text" name="email" placeholder="Your email">
                          </div>
                        </div>
                      </li>
                      <li class="item-content item-input">
                        <div class="item-inner">
                          <div class="item-title item-label">Password</div>
                          <div class="item-input-wrap">
                            <input v-model="passwordSignup" type="password" name="password" placeholder="password">
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="list">
                    <ul>
                      <li><a @click.stop="userSignup()" class="item-link list-button" href="#">Submit</a></li>
                    </ul>
                  </div>
                </form>
              </div>
          </div>
          </form>
</template>

<script>
export default {
  name: 'FormSignin',
  data() {
    return {
      title: 'Hello Worldsaaa',
      email: "",
      password: "",
      error: this.$store.state.error,
      forgot: "",
      emailSignup: "",
      passwordSignup: ""
    };
  },
  methods: {
    userSignIn () {
      this.$store.dispatch('userSignIn', { email: this.email, password: this.password, f7: this.$f7})
    },
    forgotPass () {
      this.$store.dispatch('forgotPassword', { email: this.forgot,f7: this.$f7})
    },
    userSignup () {
      this.$store.dispatch('userSignUp', { email: this.emailSignup,f7: this.$f7, password: this.passwordSignup})
    }
  },
  computed: {
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    }
  }
};
</script>