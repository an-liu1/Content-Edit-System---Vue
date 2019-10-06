<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-folder"></i> SomoPlay
        </el-breadcrumb-item>
        <el-breadcrumb-item>Logo</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container1">
      <el-upload
        action=""
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
      <img :src="logo1" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      logo1: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  created() {
    this.getData("logo", "somoplay", "all");
  },
  methods: {
    getData(sectionName, appName, pageName) {
      this.$http
        .get(
          "http://159.89.121.159:3008/somoInit/searchSomoplayWebByPageAndSection?appName=" +
            appName +
            "&sectionName=" +
            sectionName +
            "&pageName=" +
            pageName
        )
        .then(({ data }) => {
          this.tableData = data.data[0];
          console.log(this.tableData);
          this.logo1 =
            "http://159.89.121.159:3001/images/" +
            this.tableData.mainImageType +
            "/" +
            this.tableData.mainImage;
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
