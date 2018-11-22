<style  rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <div class="header">
      <div class="header-content">
        <span>
          <span class="header-content-mallName mr-10">利群网上医药商城</span>
          <a class="header-content-register" @click="toRegister">注册 / </a>
          <a class="header-content-login" @click="toLogin">登录</a>
        </span>

        <span>
          <a class="mr-10">我的商城</a>
          <a class="mr-10 fs-12"><i class="iconfont icon-phone blue"></i>0532-66025052</a>
          <a class="mr-10">微信公众号</a>
          <a class="mr-10">帮助中心</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components:{

  },
  props:{

  },
  methods:{
    toLogin(){
      this.$router.push({name: 'login'})
    },
    toRegister(){
      this.$router.push({name: 'register'})
    }
  }
  
}
</script>

