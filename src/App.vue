<style  rel="stylesheet/scss" lang="scss" src='./index.scss' >
</style>

<template>
  <div id="app">
    <router-view/>
    <Footer class="mt-20"/>
  </div>
</template>

<script>
import Footer from 'components/Footer'

export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>
