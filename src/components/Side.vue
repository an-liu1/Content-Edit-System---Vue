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
                <router-link tag="el-menu-item" to="/dashboard">
                    <i class="el-icon-s-home"></i>
                    <span class="span">&nbsp;&nbsp; Dashboard</span>
                </router-link>
            </template>
            <template>
                <el-submenu :index="a">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span slot="title" class="span">&nbsp;&nbsp; SomoPlay</span>
                    </template>
                    <template v-for="(item,index) in menu">
                        <router-link
                            tag="el-menu-item"
                            :to="'/S-' + item"
                            :key="index"
                            :index="index"
                        >
                            <span class="span">{{ item }}</span>
                        </router-link>
                    </template>
                </el-submenu>
            </template>

            <template>
                <router-link tag="el-menu-item" to="/email-Template">
                    <i class="el-icon-message"></i>
                    <span class="span">&nbsp;&nbsp; Email Template</span>
                </router-link>
            </template>

            <template>
                <router-link tag="el-menu-item" to="/profile">
                    <i class="el-icon-user-solid"></i>
                    <span class="span">&nbsp;&nbsp; Profile</span>
                </router-link>
            </template>
            <template>
                <el-menu-item @click="logout">
                    <i class="el-icon-switch-button"></i>
                    <span class="span">&nbsp;&nbsp; Log Out</span>
                </el-menu-item>
            </template>
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
            menu: [],
            a: "1"
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
