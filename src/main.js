import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader'

import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Amplify.configure(awsconfig)
applyPolyfills().then(() => {
  defineCustomElements(window)
})

Vue.config.ignoredElements = [/amplify-\w*/]

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
