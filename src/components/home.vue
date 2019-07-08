<template>
  <div>
    <p>ここはhomeです。</p>
    <router-link to="/signup">登録する</router-link>
    <router-link to="/signin">ログインする</router-link>
    <router-link to="/mypage">マイページ</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: '',
      alert: false
    }
  },
  mounted: function() {
    if (firebase.auth().currentUser) {
      console.log('ログイン中')
    } else {
      console.log('ログインしてません')
    }
  }
}

</script>
