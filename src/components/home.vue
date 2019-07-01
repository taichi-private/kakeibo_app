<template>
  <div>
    <p>ここはhomeです。</p>
    <button @click="logOut">ログアウトする</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
    }
  },
  methods: {
    logOut: function() {
      firebase.auth().signOut()
    }
  }
}
</script>
