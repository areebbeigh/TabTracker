import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import AuthenticationService from '../services/AuthenticationService'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: null,
    isUserLoggedIn: false
  },

  mutations: {
    setUser (state, user) {
      state.user = user
      state.isUserLoggedIn = !!user
    }
  },

  actions: {
    setUser ({ commit }, user) {
      commit('setUser', user)
    },

    async checkAuth ({ commit }) {
      const response = await AuthenticationService.user()
      commit('setUser', response.data.user)
    }
  }
})
