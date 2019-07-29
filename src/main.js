import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@assets/css/reset.css'
import { get, post} from "../constant/http.js";

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$get = get;
Vue.prototype.$post = post;

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
  
Vue.use(VueQuillEditor)


Vue.directive('rainbow',{
	bind(el,binding,vnode){
		el.style.color = "#" + Math.random().toString(16).slice(2,8);
	}
})
Vue.prototype.getNowFormatDate = function() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
