<template>
  <div>
    <div>
      <span>◯月◯日(◯)</span>
      <h2>今月の残高: {{ salary }}円</h2>
      <h3>出費・収益リスト</h3>
      <ul>
        <li>
          <span>交際費: -1000円</span>
        </li>
        <li>
          <span>食費: -3000円</span>
        </li>
        <li>
          <span>株: +300000円</span>
        </li>
      </ul>
    </div>
    <div>
      <p>収入(給与)</p>
      <input type="text" name="sample" v-model="salary">
      <span>円</span>
    </div>

    <div>
      <p>出費</p>
      <ul>
        <li>
          <span>項目</span>
          <input type="text" name="sample">
          <span>:</span>
          <input type="text" name="sample">
          <span>円</span>
        </li>
      </ul>
      <p>追加</p>
    </div>
    
    <div>
      <p>収益・所得</p>
      <ul>
        <li>
          <span>項目</span>
          <input type="text" name="sample">
          <span>:</span>
          <input type="text" name="sample">
          <span>円</span>
        </li>
      </ul>
      <p>追加</p>
    </div>

    <!-- サイドバー -->
    <div>
      <p>月の総支出</p>
      <ul>
        <li>
          <span>○月</span>
          <span>+1000円</span>
        </li>
        <li>
          <span>○月</span>
          <span>-1000円</span>
        </li>
      </ul>
    </div>

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
