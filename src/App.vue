<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      salary: 0 //今月の給与額
    }
  }
}
</script>
