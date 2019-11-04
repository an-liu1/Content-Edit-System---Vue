<template>
    <!-- features start -->
    <section class="section-sm" id="features">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center mb-4 pb-1" v-for="(item,index) in content.slice(6,7)" :key="index">
                        <h3 class="mb-3">{{item.nameEn}}</h3>
                        <p class="text-muted">{{item.descriptionEn}}</p>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">
                <div class="col-lg-4" v-for="(item,index) in content.slice(0,3)" :key="index">
                    <div class="features-box">
                        <div class="features-img mb-4">
                            <img :src="imgs(item.mainImage)" alt />
                        </div>
                        <h4 class="mb-2">{{item.nameEn}}</h4>
                        <p class="text-muted">{{item.descriptionEn}}</p>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row justify-content-center">
                <div class="col-lg-4" v-for="(item,index) in content.slice(3,6)" :key="index">
                    <div class="features-box">
                        <div class="features-img mb-4">
                            <img :src="imgs(item.mainImage)" alt />
                        </div>
                        <h4 class="mb-2">{{item.nameEn}}</h4>
                        <p class="text-muted">{{item.descriptionEn}}</p>
                    </div>
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container-fluid -->
    </section>
    <!-- features end -->
</template>

<script>
import { getData, getImg } from "@/api/somoplay";
export default {
    data() {
        return {
            content: []
        };
    },
    created() {
        this.getSocialData();
    },
    methods: {
        async getSocialData() {
            let res = await getData(
                "?appName=somoplay&pageName=home&sectionName=social"
            );
            this.content = res.data;
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
    4.features
********************/
.features-box {
    padding: 30px;
    text-align: center;
}

.features-box .features-img img {
    max-height: 60px;
}

.features-icon i {
    display: inline-block;
    width: 48px;
    height: 48px;
    background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(#673ab7),
        to(#3e1e8c)
    );
    background: linear-gradient(to left, #673ab7, #3e1e8c);
    border-radius: 7px;
    line-height: 48px;
}
</style>>