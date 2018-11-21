<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <Header />
    <LogoDis disText='欢迎加入'/>
    <div class="register-main">
      <div class="register-main-loginPanel pt-50">
        <i class="iconfont icon-success fs-50" style="color: #56c874"></i>
        <p class="fs-24">恭喜您，注册成功！</p>
        <l-button type='primary'>返回上一页</l-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "components/Header";
import LogoDis from "components/LogoDis";
import LButton from 'baseComponents/LButton'

export default {
  components: {
    Header,
    LogoDis,
    LButton
  },
  data() {
    return {};
  },
  props: {},
  methods: {}
};
</script>

