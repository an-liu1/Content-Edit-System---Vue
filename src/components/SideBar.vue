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
            <router-link index="1" tag="el-menu-item" to="/dashboard">
                <i class="el-icon-s-home"></i>
                <span class="span">&nbsp;&nbsp; Dashboard</span>
            </router-link>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title" class="span">&nbsp;&nbsp; SomoPlay</span>
                </template>
                <el-menu-item-group v-for="(item,index) in menu" :key="index">
                    <router-link tag="el-menu-item" :to="'/S-' + item" :key="index" :index="'2-' + index">
                        <span class="span">{{ item }}</span>
                    </router-link>
                </el-menu-item-group>

                <!-- <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>-->
            </el-submenu>

            <router-link index="3" tag="el-menu-item" to="/email-Template">
                <i class="el-icon-message"></i>
                <span class="span">&nbsp;&nbsp; Email Template</span>
            </router-link>

            <router-link index="4" tag="el-menu-item" to="/profile">
                <i class="el-icon-user-solid"></i>
                <span class="span">&nbsp;&nbsp; Profile</span>
            </router-link>

            <el-menu-item index="5" @click="logout">
                <i class="el-icon-switch-button"></i>
                <span class="span">&nbsp;&nbsp; Log Out</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import bus from "./bus.js";
import { getData } from "@/api/somoplay";

export default {
    data() {
        return {
            collapse: false,
            menu: []
        };
    },
    created() {
        bus.$on("collapse", msg => {
            this.collapse = msg;
            bus.$emit("collapse-content", msg);
        });
        this.getSectionName();
    },
    methods: {
        logout() {
            localStorage.removeItem("Authorization");
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            this.$router.push("/login");
        },
        async getSectionName() {
            let res = await getData("?appName=somoplay&page=0&size=1000");
            var arr = [];
            res.data.forEach(a => {
                arr.push(a.sectionName);
            });
            this.menu = new Set(arr);
        }
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace("/", "");
        }
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
