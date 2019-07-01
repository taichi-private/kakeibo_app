<template>
  <div class="signin">
    <h2>ログイン画面</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">ログインする</button>
    <p v-show="alert">登録されていないか、ユーザー名orパスワードが間違ってます。</p>
    <p>あなたはアカウントを持ってますか？
      <router-link to="/signup">登録する</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
      username: '',
      password: '',
      alert: false
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          this.$router.push('/')
        },
        err => {
          this.alert = true 
        }
      )
    }
  }
}
</script>