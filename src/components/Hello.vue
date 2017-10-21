<template lang="pug">

  div.box
    h1 Vue.Js
    h2 Workflow
    img(src='../assets/logo.png')

</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>

    h1
        set-font-size( 30px )
        font-weight 700
        color $blue

        +below( 500px )
            set-font-size( 20px )

    h2
        set-font-size( 20px )
        font-weight 300
        color $green

        +below( 500px )
            set-font-size( 15px )

</style>
