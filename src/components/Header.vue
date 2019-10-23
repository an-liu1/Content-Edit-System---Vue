<template>
    <div class="header">
        <!-- collapse button -->
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
        <div class="logo">Content Edit System</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- FUllScreen -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip
                        effect="dark"
                        :content="fullscreen?`cancle`:`fullscreen`"
                        placement="bottom"
                    >
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- Message -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" content="Landing Page" placement="bottom">
                        <!-- :content="message?`${message} unread messages`:`message`"  -->
                        <router-link to="/index">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <!-- <span class="btn-bell-badge" v-if="message"></span> -->
                </div>
                <!-- portrait -->
                <div class="user-avator">
                    <el-tooltip effect="dark" :content="`Change your avatar`" placement="bottom">
                        <img @click="avatarChange" src="../assets/img/img.jpg" />
                    </el-tooltip>
                </div>
                <!-- User Setting -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="profile">Your profile</el-dropdown-item>
                        <el-dropdown-item divided command="loginout">Log Out</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <el-dialog title="Change Your Avatar" :visible.sync="avatarVisible" width="221px">
            <el-upload
                class="avatar-uploader"
                action
                :show-file-list="false"
                :http-request="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div
                    class="el-upload__tip"
                    slot="tip"
                >We only support PNG, GIF, JPEG, or JPG pictures and smaller than 1MB.</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="avatarVisible = false">Cancle</el-button>
                <el-button type="primary" @click="saveAvatar">Submit</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import bus from "./bus.js";
import { authData } from "@/api/somoplay";
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            name: "",
            message: 2,
            avatarVisible: false,
            imageUrl: "",
            imageData: ""
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem("name");
            return username ? username : this.name;
        }
    },
    created() {
        this.handleGetData();
    },
    methods: {
        async handleGetData() {
            let res = await authData({
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password")
            });
            this.name = res.data.firstName;
        },
        handleCommand(command) {
            if (command == "loginout") {
                localStorage.removeItem("Authorization");
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                this.$router.push("/login");
            } else if (command == "profile") {
                this.$router.push("/profile");
            }
        },
        // collapse
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit("collapse", this.collapse);
        },
        // FullScreen
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        avatarChange() {
            this.avatarVisible = true;
        },
        handleAvatarSuccess(file) {
            this.imageUrl = URL.createObjectURL(file.file);
            this.getBase64(file.file).then(res => {
                this.imageData = res;
            });
        },
        beforeAvatarUpload(file) {
            const imgAccept = [
                "image/gif",
                "image/jpeg",
                "image/jpg",
                "image/png"
            ];

            const isLt1M = file.size / 1024 / 1024 < 1;

            if (imgAccept.indexOf(file.type) == -1) {
                this.$message.error(
                    "We only support PNG, GIF, JPEG, or JPG pictures."
                );
            }
            if (!isLt1M) {
                this.$message.error(
                    "Please upload a picture smaller than 1 MB.!"
                );
            }
            return file.type && isLt1M;
        },
        saveAvatar() {}
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>
<style scoped>
img:hover {
    cursor: pointer;
}
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
