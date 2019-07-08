<template>
  <div class="signup">
    <h2>登録画面</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signUp">登録する</button>
    <p v-show="alert">登録できません</p>
    <p>あなたはアカウントを持ってますか？
      <router-link to="/signin">ログインする</router-link>
    </p>
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
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          this.$router.push('/')
        })
        .catch(error => {
          this.alert = true
        })
    }
  }
}
</script>
