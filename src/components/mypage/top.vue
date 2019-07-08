<template>
  <div>
    <span>ここはmypageです。</span>
    <button @click="logOut">ログアウトする</button>

    <p>終始一覧</p>
    <p><router-link to="/mypage/income">2019/1の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/2の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/3の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/4の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/5の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/6の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/7の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/8の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/9の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/10の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/11の収支を登録する</router-link></p>
    <p><router-link to="/mypage/income">2019/12の収支を登録する</router-link></p>
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
