<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-user"></i> User Profile
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container1">
      <div class="form-box">
        <el-form ref="form" :model="form">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item label="Username :">
                <el-input v-model="form.userEmail" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12">
              <el-form-item label="FirstName :">
                <el-input v-model="form.firstName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12">
              <el-form-item label="LastName :">
                <el-input v-model="form.lastName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12">
              <el-form-item label="Password :">
                <el-input v-model="form.password" placeholder="***********"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12">
              <el-form-item label="Confirmed Password :">
                <el-input v-model="form.confirmPassword"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12">
              <el-form-item label="Last Login Date :">
                <el-input v-model="form.loginDate" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12">
              <el-form-item label="Register Date :">
                <el-input v-model="form.registerDate" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <el-button>Cancle</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "baseform",
  data() {
    return {
      form: {}
    };
  },
  created() {
    this.$http
      .post("http://159.89.121.159:3008/auth/login", {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
      })
      .then(({ data }) => {
        this.form = data.data;
      });
  },
  methods: {
    onSubmit() {
      this.$message.success("Successfully Submit！");
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>