<template>
    <div class="wrapper">
        <Header />
        <Side />
        <div class="content-box" :class="{'content-collapse':collapse}">
            <Tags />

            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../assets/css/main.css";
@import "../assets/css/color-adjustment.css";
</style>

<script>
import Header from "@/components/Header.vue";
import Side from "@/components/SideBar.vue";
import bus from "@/components/bus.js";
import Tags from "@/components/Tags.vue";

export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        Side,
        Header,
        Tags
    },
    created() {
        bus.$on("collapse-content", msg => {
            this.collapse = msg;
        });
        
        bus.$on("tags", msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
