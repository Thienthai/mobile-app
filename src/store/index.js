import Vue from 'vue'
import Vuex from 'vuex'
import router from '../routes.js'
import framework7 from '../../node_modules/framework7'
import firebase from '../firebase.js'
import auth from '../store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    app: framework7,
    user: null,
    loading: false,
    error: "",
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
      this.error = payload
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
        commit('setUser', {email: firebaseUser.email})
        commit('setLoading', false)
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
    },
    userSignIn ({commit}, payload) {
      commit('setLoading', true)
      console.log(payload.f7)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.email})
        commit('setLoading', false)
        commit('setError', null)
        console.log("success")
        payload.f7.views.main.router.navigate("/about/")
      })
      .catch(error => {
        commit('setError', error.message)
        console.log(this.error + "mama")
        commit('setLoading', false)
      })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {email: payload.email})
    },
    userSignOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push('/signin')
    },
    postInfo ({commit}, payload) {
      console.log(payload)
      commit('setPost', payload)
      router.push('/mypost')
    }
  }
})