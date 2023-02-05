<script>
export default {
  props:['allData']
}
</script>

<template>
<div class="diagram-back">
  <div class="diagram-item" v-for="data in allData" :key="data.index">
    <p class="item-name">{{data.catName}}</p>
    <div  :style="{width: data.catPercent + 'px', height: 5 + 'px', backgroundColor: '#16a085'}"></div>
  </div>
</div>
</template>

<style>
  p{
    margin: 0;
  }
  .diagram-back{
    background-color: bisque;
    width: 250px;
    min-height: 100px;
    border: 1px solid black;
    padding: 10px;
  }
  .item-name{
    width: 100px;
  }
  .diagram-item{
    display: flex;
    align-items: center;
  }
</style>