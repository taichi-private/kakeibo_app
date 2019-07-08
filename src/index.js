import './stylesheets/sample.scss';
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBgJtJrJDUReT4lYmPJ3AhPzObdMgQIOIg',
  authDomain: 'kakeibo-app-1b54b.firebaseapp.com',
  databaseURL: 'https://kakeibo-app-1b54b.firebaseio.com',
  projectId: 'kakeibo-app-1b54b',
  storageBucket: '',
  messagingSenderId: '353188544509'
}
firebase.initializeApp(config);

new Vue({
  el: '#app', // アプリをマウントする要素(セレクタで指定)
  router,
  components: { App }, // Appというコンポーネントを使うよ、という宣言
  template: '<app/>', // el(今回は#app)の中に表示する内容
})

