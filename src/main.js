import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    // new Vue() in main.js, in App.vue and in List.vue
    console.log('Global Mixin - Created Hook')
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
