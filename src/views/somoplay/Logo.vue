<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-folder"></i>
                    SomoPlay
                </el-breadcrumb-item>
                <el-breadcrumb-item>Logo</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container1">
            <div class="content-title">Logo</div>

            <div class="crop-demo">
                <img :src="cropImg" class="pre-img" />
                <div class="crop-demo-btn">
                    Select Images
                    <input
                        class="crop-input"
                        type="file"
                        name="image"
                        accept="image/*"
                        @change="setImage"
                    />
                </div>
            </div>

            <el-dialog title="Image Crop" :visible.sync="dialogVisible" width="30%">
                <vue-cropper
                    ref="cropper"
                    :src="imgSrc"
                    :ready="cropImage"
                    :zoom="cropImage"
                    :cropmove="cropImage"
                    style="width:100%;height:300px;"
                ></vue-cropper>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">Cancle</el-button>
                    <el-button type="primary" @click="saveCrop">Submit</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { getData, getImg, newData, editData } from "@/api/somoplay";
export default {
    name: "Logo",
    inject: ["reload"],
    data() {
        return {
            form: {},
            defaultSrc: "",
            fileList: [],
            imgSrc: "",
            cropImg: "",
            dialogVisible: false
        };
    },
    components: {
        VueCropper
    },
    created() {
        this.getData();
        // this.cropImg = this.defaultSrc;
    },
    methods: {
        async getData() {
            let res = await getData(
                "?appName=somoplay&sectionName=Logo&pageName=all"
            );
            this.form = res.data[0];
            this.defaultSrc = getImg(
                res.data[0].mainImageType + "/" + res.data[0].mainImage
            );

            this.cropImg = this.defaultSrc;
        },

        setImage(e) {
            const file = e.target.files[0];
            if (!file.type.includes("image/")) {
                return;
            }
            const reader = new FileReader();
            reader.onload = event => {
                this.dialogVisible = true;
                this.imgSrc = event.target.result;
                this.$refs.cropper &&
                    this.$refs.cropper.replace(event.target.result);
            };
            reader.readAsDataURL(file);
        },
        cropImage() {
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            // this.cropImgURL = this.$refs.cropper.cropper.url;
        },
        async saveCrop() {
            // let imageDataq = this.cropImg.split(',')[1]
            let params = {
                mainImageType: "somo/somoplayWeb",
                imageData: this.cropImg
            };
            let res = await newData(params);
            const { code, data } = res;
            if (code === 0) {
                this.form.itemId = this.form._id;
                this.form.mainImage = data.mainImage;
                let result = await editData(this.form);
                const { code } = result;
                if (code === 0) {
                    this.dialogVisible = false;
                    this.$message.success(`Successfully Insert a new Row`);
                    this.reload();
                }
            }
        },
        cancelCrop() {
            this.dialogVisible = false;
            this.cropImg = this.defaultSrc;
        }
        // handleError() {
        //     this.$message.success(`Failed to upload, try again please!`);
        // }
    }
};
</script>

<style scoped>
.content-title {
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
.pre-img {
    width: 250px;
    height: 250px;
    display: block;
    margin: 0 auto;
    background: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 5px;
}
.crop-demo {
    display: block;
    /* align-items: flex-end; */
}
.crop-demo-btn {
    position: relative;
    width: 130px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    margin-left: 30px;
    background-color: #409eff;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
    display: block;
    margin: 20px auto;
}
.crop-input {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}
</style>
