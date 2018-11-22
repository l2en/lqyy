<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div class="register-success">
    <i class="iconfont icon-success fs-50" style="color: #56c874"></i>
    <p class="fs-24">恭喜您，注册成功！</p>
    <l-button type='primary' @click='backToPrePage'>返回上一页</l-button>
  </div>
</template>

<script>
import LButton from "baseComponents/LButton";

export default {
  components: {
    LButton
  },
  data() {
    return {};
  },
  props: {},
  methods: {
    backToPrePage(event) {
      this.$emit("backToPrePage",event);
    }
  }
};
</script>

