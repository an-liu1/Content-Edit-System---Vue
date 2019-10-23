<template>
    <el-dialog
        custom-class="m-dialog"
        :visible.sync="vis"
        width="35%"
        title="Add"
        @close="closeDialog"
        :show-close="true"
    >
        <el-form label-width="150px">
            <el-form-item v-for="(item,index) in formData" :key="index" :label="index">
                <el-input
                    v-if="index == 'appName' || index == 'pageName' || index == 'sectionName'"
                    v-model="addForm[index]"
                    disabled="disabled"
                ></el-input>
                <el-upload
                    class="avatar-uploader"
                    v-else-if="index == 'image'"
                    action
                    :http-request="handleAvatarSuccess"
                    :show-file-list="false"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-input v-else v-model="addForm[index]"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="vis = false">Cancle</el-button>
            <el-button type="primary" @click.enter="saveNew">Submit</el-button>
        </span>
    </el-dialog>
</template>
<script>
import { getData, newData } from "@/api/somoplay";
export default {
    inject: ["reload"],
    name: "Add-Dialog",
    props: {
        addVisible: Boolean,
        formData: Object
    },
    watch: {
        addVisible(newValue) {
            this.vis = newValue;
        }
    },
    created() {
        this.handleData();
        this.addForm = Object.assign({}, this.formData);
    },
    data() {
        return {
            vis: false,
            tableData: {},
            addForm: {},
            imageUrl: "",
            imageData: ""
        };
    },
    methods: {
        async handleData() {
            let address = `?appName=${this.formData.appName}&sectionName=${this.formData.sectionName}&pageName=${this.formData.pageName}`;
            let res = await getData(address);
            this.tableData = res.data;
        },
        closeDialog() {
            this.$emit("close-dialogStatus", true);
        },
        //save new
        async saveNew() {
            if (this.imageUrl !== "") {
                let params = {
                    mainImageType: "somo/somoplayWeb",
                    imageData: this.imageData
                };
                for (const key in this.tableData[1]) {
                    if (this.addForm[key] == undefined) {
                        this.addForm[key] = "";
                    }
                }
                try {
                    let res = await newData(params);
                    const { code, data } = res;
                    if (code === 0) {
                        this.addForm.mainImage = data.mainImage;
                        this.addForm.mainImageType = "somo/somoplayWeb";

                        let result = await newData(this.addForm);
                        const { code } = result;
                        if (code === 0) {
                            this.addVisible = false;
                            this.$message.success(
                                `Successfully Insert a new Row`
                            );
                            this.reload();
                        }
                    }
                } catch (e) {
                    this.$message.error(
                        `Failed to add new content, try again please!`
                    );
                }
            } else {
                for (const key in this.tableData[1]) {
                    if (this.addForm[key] == undefined) {
                        this.addForm[key] = "";
                    }
                }
                let result = await newData(this.addForm);
                const { code } = result;
                if (code === 0) {
                    this.addVisible = false;
                    this.$message.success(`Successfully Insert a new Row`);
                    this.reload();
                }
            }
        },
        getBase64(file) {
            return new Promise(function(resolve, reject) {
                let reader = new FileReader();
                let imgResult = "";
                reader.readAsDataURL(file);
                reader.onload = function() {
                    imgResult = reader.result;
                };
                reader.onerror = function(error) {
                    reject(error);
                };
                reader.onloadend = function() {
                    resolve(imgResult);
                };
            });
        },

        handleAvatarSuccess(file) {
            this.imageUrl = URL.createObjectURL(file.file);
            this.getBase64(file.file).then(res => {
                this.imageData = res;
            });
        },
        //validation
        beforeAvatarUpload(file) {
            const imgAccept = [
                "image/gif",
                "image/jpeg",
                "image/jpg",
                "image/png"
            ];

            const isLt2M = file.size / 1024 / 1024 < 2;

            if (imgAccept.indexOf(file.type) == -1) {
                this.$message.error(
                    "We only support PNG, GIF, JPEG, or JPG pictures."
                );
            }
            if (!isLt2M) {
                this.$message.error(
                    "Please upload a picture smaller than 2 MB.!"
                );
            }
            return file.type && isLt2M;
        }
    }
};
</script>

<style scoped>
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