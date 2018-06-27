import Vue from 'vue'
import Vuex from 'vuex'
import router from '../routes.js'
import framework7 from '../../node_modules/framework7'
import firebase from '@/firebase.js'
import auth from '../store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeRef: firebase.storage(),
    auth: firebase.auth(),
    db: firebase.database(),
    app: framework7,
    user: "maka",
    loading: false,
    error: null,
  },
  getters: {
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setPost (state, payload) {
      state.post.push(payload)
    }
  },
  actions: {
    userSignUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: payload.email})
        commit('setLoading', false)
        payload.f7.dialog.alert("Successfully create account")
        payload.f7.views.main.router.navigate("/")
      })
      .catch(error => {
        commit('setError', error.message)
        payload.f7.dialog.alert(error.message)
        commit('setLoading', false)
      })
    },
    userSignIn ({commit}, payload) {
      commit('setLoading', true)
      console.log(payload.f7)
      // firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      // .then(firebaseUser => {
      //   console.log(firebaseUser.email)
      //   commit('setUser', {email: firebaseUser.email})
      //   commit('setLoading', false)
      //   commit('setError', null)
      //   console.log("success")
      //   payload.f7.views.main.router.navigate("/about/")
      // })
      // .catch(error => {
      //   commit('setError', error.message)
      //   console.log(this.error + "mama")
      //   commit('setLoading', false)
      // })
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(() => {
        console.log(payload.email)
        commit('setUser', {email: payload.email})
        commit('setLoading', false)
        commit('setError', null)
        console.log("success")
        payload.f7.views.main.router.navigate("/about/")
      }, function(error){
        commit('setError', error.message)
        payload.f7.dialog.alert(error.message)
        console.log(error.message)
        commit('setLoading', false)
      })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {email: payload.email})
    },
    userSignOut ({commit}, payload) {
      firebase.auth().signOut()
      commit('setUser', null)
      payload.f7.views.main.router.navigate("/")
    },
    postInfo ({commit}, payload) {
      console.log(payload)
      commit('setPost', payload)
      router.push('/mypost')
    },
    forgotPassword ({commit}, payload) {
      firebase.auth().sendPasswordResetEmail(payload.email).then(function() {
        // Email sent.
        payload.f7.dialog.alert("Please check your email to reset your password")
      }).catch(function(error) {
        // An error happened.
        payload.f7.dialog.alert(error.message)
      });
    }
  }
})