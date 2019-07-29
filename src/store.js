import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	triggerNavListKey:localStorage.nav ? localStorage.getItem("nav") : null
  },
  getters:{
	triggerNavListKey:state=>state.triggerNavListKey
  },
  mutations: {
	setNavListKey(state,data){
		state.triggerNavListKey=data
		localStorage.setItem("nav",data)
	}
  }
})
