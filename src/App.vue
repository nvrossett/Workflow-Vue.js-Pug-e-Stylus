<template lang="pug"> 
  #app
    header
      Hello
    nav
      router-link(to='/') Home
      router-link(to='/sobre') Sobre
    main
      router-view

</template>

<script>
  import Hello from './components/Hello.vue'

  export default {
    name: 'app',
    components: {
      Hello
    }
  }
</script>

<style lang='stylus'> 

  html, body
      width 100%
      margin 0
      padding 0
      background-color rgba(0,0,0,0.03)
      
  html
      font-size 16px  

  #app
      font-family $primary
      text-align center
      position absolute
      top 50%
      left 50%
      transform translateY(-50%) translateX(-50%)
      width 50%
  nav 
    a
      text-decoration none
      font-weight 800
      color $blue
      padding 15px
      opacity 0.7
      &.current-page
        color $green
        opacity 1
  main
    padding 20px
    margin 25px 0
    background-color $white
    border 1px solid rgba(0,0,0,0.1)
          
</style>