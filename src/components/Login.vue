<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">Content Edit System</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.email" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">Log In</el-button>
                </div>
                <p class="login-tips">
                    New User?
                    <router-link to="/signup">Start here</router-link>
                </p>
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import { authData } from "@/api/somoplay";

export default {
    data: function() {
        return {
            param: {
                email: "",
                password: ""
            },
            rules: {
                email: [
                    {
                        required: true,
                        message: "Username is a required field.",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "Password is a required field.",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        ...mapMutations(["changeLogin"]),
        submitForm() {
            this.$refs.login.validate(async valid => {
                if (valid) {
                    try {
                        let res = await authData(this.param);
                        const { code, data } = res;
                        if (code === 0) {
                            this.userToken = "Bearer " + data.token;
                            this.changeLogin({
                                Authorization: this.userToken
                            });
                            localStorage.setItem("email", this.param.email);
                            localStorage.setItem(
                                "password",
                                this.param.password
                            );
                            this.$message.success("Sucessfullu Login!");
                            this.$router.push("/dashboard");
                        }
                    } catch (error) {
                        this.$message.success("Wrong username or password!");
                        console.log(error);
                    }
                } else {
                    this.$message.error("Username | Password is required!");
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
html,
body,
#app,
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>