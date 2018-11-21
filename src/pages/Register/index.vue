<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <Header />
    <LogoDis disText='欢迎加入'/>
    <div class="register-main">
      <div class="register-main-loginPanel p-30">
        <div class="register-main-loginPanel-title">
          <span class="fs-25">注册新用户</span>
          <a class="fs-15 blue">已有账号，快捷登录</a>
        </div>
        <div class="register-main-loginPanel-main pt-36">
          <l-input type="text" :isError='isError' icon='icon-user' placeholder="手机/邮箱/用户名"/>
          <l-input type="password" :isError='isError' icon='icon-Verification' :suffix='true' suffixText='获取验证码' class="mt-20" placeholder="输入验证码"/>
          <l-input type="password" :isError='isError' icon='icon-psw' class="mt-20" placeholder="密码"/>
          <l-input type="password" :isError='isError' icon='icon-psw' class="mt-20" placeholder="确认密码"/>
          <l-verify class="mt-20"/>
          <div class="fs-15 mt-25 gray">
            <input type="checkbox"/>
            <span>我已阅读并同意<a class="blue">《服务协议》</a></span>
          </div>
          <l-button type='primary' @click.native="handleRegister" class="mt-20">立即注册</l-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./api.js";

import LInput from "baseComponents/LInput";
import LButton from "baseComponents/LButton";
import LVerify from "baseComponents/LVerify";

import Header from "components/Header";
import LogoDis from "components/LogoDis";

export default {
  components: {
    Header,
    LogoDis,
    LInput,
    LButton,
    LVerify
  },
  data() {
    return {
      isError: false
    };
  },
  props: {},
  methods: {
    changeError() {
      this.isError = !this.isError;
    },
    handleRegister(){
      this.$router.push({name: 'registersuccess'})
    }
  }
};
</script>

