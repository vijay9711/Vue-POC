<template>
  <label class="skew-wrapper m-0">
      <label v-if="text != 'undefined undefined'" class="text m-0">{{text}}</label>
      <!-- <h1>hwll</h1> -->
  </label>
</template>

<script>
export default {
    props:["text"]

}
</script>

<style lang="scss" scoped>
.skew-wrapper {
  background-color: #fff;
  color: #282828;
  font-weight: bold;
  transform: skew(15deg);
  padding: 0px 10px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  .text {
    transform: skew(-15deg);
  }
}
</style>