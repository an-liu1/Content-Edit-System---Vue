<template>
    <div id="app">
        <router-view v-if="isRouterAlive"/>
    </div>
</template> 

<style>
html,
body,
#app{
    height: 100%;
}
</style>

<script>
export default {
    name:'app',
    provide(){
        return {
            reload: this.reload
        }
    },
    data(){
        return {
            isRouterAlive: true
        }
    },
    methods:{
        reload(){
            this.isRouterAlive = false
            this.$nextTick(function(){
                this.isRouterAlive = true
            })
        }
    }
}
</script>