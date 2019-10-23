<template>
    <el-dialog
        custom-class="m-dialog"
        :visible.sync="vis"
        width="35%"
        title="Edit"
        @close="closeDialog"
        :show-close="true"
    >
        <el-form ref="form" :model="form" label-width="150px">
            <el-form-item v-for="(item,index) in editForm" :key="index" :label="index">
                <el-input
                    v-if="index == 'appName' || index == 'pageName' || index == 'sectionName'"
                    v-model="form[index]"
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
                    <img v-else :src="eidtImg(form.mainImage)" class="avatar" />
                </el-upload>
                <el-input v-else v-model="form[index]"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="vis = false">Cancle</el-button>
            <el-button type="primary" @click.enter="saveEdit">Submit</el-button>
        </span>
    </el-dialog>
</template>
<script>
import { newData, editData, getImg } from "@/api/somoplay";
export default {
    name: "Edit-Dialog",
    props: {
        editVisible: Boolean,
        form: Object,
        editForm: Object,
        idx: Number
    },
    watch: {
        editVisible(newValue) {
            this.vis = newValue;
        }
    },
    computed: {
        eidtImg: function() {
            return function(mainImage) {
                return getImg(mainImage);
            };
        }
    },
    data() {
        return {
            vis: false,
            imageUrl: "",
            imageData: ""
        };
    },
    methods: {
        closeDialog() {
            this.$emit("close-dialogStatus", true);
        },
        // saveEdit
        async saveEdit() {
            if (this.imageUrl !== "") {
                let params = {
                    mainImageType: "somo/somoplayWeb",
                    imageData: this.imageData
                };
                try {
                    let res = await newData(params);
                    const { code, data } = res;
                    if (code === 0) {
                        this.form.itemId = this.form._id;
                        this.form.mainImage = data.mainImage;
                        this.form.mainImageType = "somo/somoplayWeb";
                        let result = await editData(this.form);

                        const { code } = result;
                        if (code === 0) {
                            this.editVisible = false;
                            this.$message.success(
                                `Successfully Edit ${this.idx + 1} Row`
                            );
                        }
                    }
                } catch (e) {
                    this.$message.error(`Failed to update, try again please!`);
                }
            } else {
                this.form.itemId = this.form._id;
                let result = await editData(this.form);

                const { code } = result;
                if (code === 0) {
                    this.editVisible = false;
                    this.$message.success(
                        `Successfully Edit ${this.idx + 1} Row`
                    );
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