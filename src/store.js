import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	triggerNavList:localStorage.nav ? localStorage.getItem("nav") : 1
  },
  getters:{
	triggerNavList:state=>state.triggerNavList
  },
  mutations: {
	setNavList(state,data){
		state.triggerNavList=data
		localStorage.setItem("nav",data)
	}
  }
})
