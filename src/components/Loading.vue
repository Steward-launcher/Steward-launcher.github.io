<template>
  <div class="spin-wrap" v-show="visible">
    <a-spin :spinning="visible"/>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: ['visible']
}
</script>

<style lang="scss" scoped>
.spin-wrap {
  background: #fff;
  padding-top: 20px;
  text-align: center;
}
</style>