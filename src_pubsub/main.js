import Vue from 'vue';
import App from './App.vue'


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