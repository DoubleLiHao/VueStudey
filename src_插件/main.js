import Vue from 'vue';
import App from './App.vue'
import plugin from './plugin.js'

Vue.use(plugin)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: `
    <div>
      <App></App>
    </div>
  `,
  render: h => h(App)
})