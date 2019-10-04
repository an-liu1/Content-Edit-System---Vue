<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template>
                <el-menu-item>
                    <i class="fa fa-home"></i>
                    <span slot="title"> Dashboard</span>
                </el-menu-item>
            </template>
            <template>
                <el-submenu :index="a">
                    <template slot="title">
                        <i class="fa fa-edit"></i>
                        <span slot="title"> SomoPlay</span>
                    </template>
                    <template v-for="(item,index) in menu">
                        <router-link tag="el-menu-item" :to="'/' + item" :key="index" :index="index">
                            <span>{{ item }}</span>
                        </router-link>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from "./bus.js";
export default {
    data() {
        return {
            collapse: false,
            menu: [],
            a: "1"
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace("/", "");
        }
    },
    created() {
        bus.$on("collapse", msg => {
            this.collapse = msg;
            bus.$emit("collapse-content", msg);
        });
    },
    mounted() {
        this.$http
            .get(
                "http://159.89.121.159:3001/somo/contentByApp?appName=somoplay&page=0&size=1000"
            )
            .then(response => {
                return response.data;
            })
            .then(res => {
                var arr = [];
                res.data.forEach(a => {
                    arr.push(a.sectionName);
                });
                this.menu = new Set(arr);
            });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
