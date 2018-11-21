<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div style="height:50px">
    <div class='__input-wrapper' :style="errorStyle">
      <i :class="icoClass"></i>
      <input :type="type" style="width:" :class="inputClass" :placeholder="placeholder"/>
      <a class="blue pl-5" v-if='suffix' style="border:0;border-left: 1px #eee solid;width:90px">{{suffixText}}</a>
    </div>
    <p class="__input-errortips" v-if='isError'>
      <i class="iconfont icon-wraning red mr-5"></i>
      <span class="red fw-500">{{errortips}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "icon-user"
    },
    type: {
      type: String,
      default: "text"
    },
    inputWidth: {
      type: String,
      default: "369px"
    },
    placeholder: {
      type: String,
      default: ""
    },
    errortips: {
      type: String,
      default: "输入错误"
    },
    isError: {
      type: Boolean,
      default: false
    },
    suffix:{
      type: Boolean,
      default: false
    },
    suffixText:{
      type: String,
      default: ''
    }
  },
  components: {},
  computed: {
    inputClass() {
      return ["__input-content", "pl-12", "fs-17", "fw-400"];
    },
    errorStyle() {
      return this.isError ? { border: "1px red solid" } : {};
    },
    icoClass() {
      return ["__input-wrapper-icon", "iconfont", "gray", `${this.icon}`];
    }
  },
  methods: {}
};
</script>
