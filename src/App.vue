<style lang="stylus">
  *
    margin 0
    padding 0
    line-height 1
    font-family Microsoft Yahei
    color rgb(51, 51, 51)
  a
    text-decoration none
    color inherit
  ul
  ol
    list-style none
  em
  i
    font-style normal
  .w1180
    margin 0 auto
    width 1180px
</style>
<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import MyHeader from "./components/Header";
  import MyFooter from "./components/Footer";
  export default {
    components : {
      MyHeader,
      MyFooter
    }
  };
</script>