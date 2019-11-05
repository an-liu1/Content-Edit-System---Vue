<template>
    <!-- available demos start -->
    <section class="section bg-light" id="demo">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title text-center mb-3">
                        <h3>Available Demos</h3>
                        <p class="text-muted">At solmen va esser necessi far uniform grammatica.</p>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">
                <div
                    class="col-lg-4 col-md-6 details"
                    v-for="(item,index) in demo"
                    :key="index"
                    @click="openDialog(item)"
                >
                    <div class="demo-box bg-white mt-4 p-2">
                        <!-- <a href="#" class="text-dark"> -->
                        <img :src="imgs(item.mainImage)" alt class="img-fluid mx-auto d-block" />
                        <div class="p-3 text-center">
                            <h5 class="mb-0">{{item.nameEn}}</h5>
                        </div>
                        <!-- </a> -->
                    </div>
                </div>
            </div>
            <!-- end row -->

            <!-- <div class="row">
                <div class="col-12">
                    <div class="text-center mt-4">
                        <button class="btn btn-info navbar-btn">
                            More Demos
                            <i class="mdi mdi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div> -->
            <!-- end row -->
        </div>
        <!-- end container-fluid -->
        <el-dialog title="Demo Details" :visible.sync="dialogVisible" fullscreen>
            <span class="dialogSpan">{{list.nameEn}}</span>
            <el-image :src="imgs(list.mainImage)" class="dialogImg"></el-image>
            <p class="dialogDes">{{list.descriptionEn}}</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Close</el-button>
            </span>
        </el-dialog>
    </section>
    <!-- available demos end -->
</template>

<script>
import { getData, getImg } from "@/api/somoplay";
export default {
    data() {
        return {
            demo: [],
            dialogVisible: false,
            list:[]
        };
    },
    created() {
        this.getDemo();
    },
    methods: {
        async getDemo() {
            let res = await getData(
                "?appName=somoplay&pageName=home&sectionName=slideShow"
            );
            this.demo = res.data;
        },
        openDialog(item){
            this.list = item
            this.dialogVisible = true
        }
    },
    computed: {
        imgs: function() {
            return function(item) {
                return getImg(item);
            };
        }
    }
};
</script>

<style>
/*******************
    5.demo
********************/
.demo-box,
.testi-desc {
    -webkit-box-shadow: 0 10px 35px 0 rgba(154, 161, 171, 0.1);
    box-shadow: 0 10px 35px 0 rgba(154, 161, 171, 0.1);
    border-radius: 7px;
}
.details:hover{
    cursor: pointer;
}
.dialogSpan{
    display: block;
    text-align: center;
    font-size: 2em;
}
.dialogImg{
    display: block;
    width: 35%;
    margin: 0 auto;
}
.dialogDes{
    width: 30%;
    margin: 0 auto;
}
</style>