<template>
  <div>
    <span>ここはmypage/incomeです。</span>
    <button @click="logOut">ログアウトする</button>
  </div>
</template>

<script>

export default {
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
