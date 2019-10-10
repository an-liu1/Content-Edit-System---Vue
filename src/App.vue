<template>
    <div id="app">
        <router-view v-if="isRouterAlive"/>
    </div>
</template> 

<style>
/* @import "./assets/css/main.css";
@import "./assets/css/color-adjustment.css"; */
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