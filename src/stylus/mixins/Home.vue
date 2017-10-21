<template lang="pug">
    div
        h3 Home
        p 
            strong Start completo configurado com:
        ul
            li Vue.js
                ul
                    li Vue Router
            li Webpack
            li Pug
            li Stylus
                ul
                    li Rupture
                    li Nib
</template>

<script>
export default {
}
</script>
 <style lang='stylus'>
    h3
        color $blue
    p
        set-font-size( 13px )
    ul
        text-align left
    li
        set-font-size( 13px )
        margin-bottom 10px

</style>