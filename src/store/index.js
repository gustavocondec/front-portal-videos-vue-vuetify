import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vdrawer: true// variable para mostrar el drawer
  },
  mutations: {
    cambiarDrawer (state) {
      state.vdrawer = !state.vdrawer
    }
  },
  actions: {
    cambiarDrawer (context) {
      context.commit('cambiarDrawer')
    }
  },
  modules: {
  }
})
