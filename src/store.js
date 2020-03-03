import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
    user: ''
  },
  actions: {
    setUser({ commit }, payload) {
      commit('user', payload)
    }
  }
}

export default new Vuex({ store })