<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <Header />
    <LogoDis disText='欢迎加入'/>
    
    <div class="login-main">
      <div class="login-main-loginPanel">
        <div class="login-main-loginPanel-title">
          <span class="fs-25">登录</span>
          <a class="fs-15 red" @click="toRegister">免费注册</a>
        </div>
        <div class="login-main-loginPanel-main pt-36">
          <l-input type="text" :isError='isError' icon='icon-user' placeholder="手机/邮箱/用户名"/>
          <l-input type="password" :isError='isError' icon='icon-psw' class="mt-20" placeholder="密码"/>
          <l-verify class="mt-20" v-if='isError'/>
          <div class="fs-15 mt-25 gray">
            <input type="checkbox"/>
            <span>自动登录</span> | <a>忘记密码?</a>
          </div>
          <l-button type='primary' @click="changeError" class="mt-20">登录</l-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from './api.js'

import LInput from 'baseComponents/LInput'
import LButton from 'baseComponents/LButton'
import LVerify from 'baseComponents/LVerify'

import Header from 'components/Header'
import LogoDis from 'components/LogoDis'


export default {
  components:{
    Header,
    LogoDis,
    LInput,
    LButton,
    LVerify,
  },
  data(){
    return{
      isError: false
    }
  },
  props:{

  },
  methods:{
    toRegister(){
      this.$router.push({name: 'register'})
    },
    changeError(){
      this.isError = !this.isError
    }
  }
}
</script>

