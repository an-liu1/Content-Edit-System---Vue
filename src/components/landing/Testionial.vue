<template>
       <!-- testimonial start -->
        <section class="section bg-light" id="clients">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center mb-4">
                            <h3>About Us</h3>
                            <!-- <p
                                class="text-muted"
                            >The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business.</p> -->
                        </div>
                    </div>
                </div>
                <!-- end row -->
                <div class="row">
                    <div class="col-lg-4" v-for="(item,index) in content" :key="index">
                        <div class="testi-box mt-4">
                            <div class="testi-desc bg-white p-4">
                                <p
                                    class="text-muted mb-0"
                                >"{{item.nameEn}}"</p>
                            </div>
                            <!-- <div class="p-4">
                                <div class="testi-img float-left mr-2">
                                    <img src="images/testi/img-2.png" alt class="rounded-circle" />
                                </div>
                                <div>
                                    <h5 class="mb-0">Michael Morrell</h5>
                                    <p class="text-muted m-0">
                                        <small>- Ubold User</small>
                                    </p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- testimonial end -->

</template>

<script>
import {getData} from '@/api/somoplay'
export default {
    data(){
        return {
            content:[]
        }
    },
    created() {
        this.getContent()
    },
    methods: {
        async getContent(){
            let res = await getData("?appName=somoplay&pageName=home&sectionName=content")
            this.content = res.data
        }
    },
}
</script>

<style>

/*******************
    8.testionial
********************/
.testi-box .testi-desc {
    position: relative;
}

.testi-box .testi-desc:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    background: #ffffff;
    bottom: -6px;
    left: 48px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.testi-box .testi-img img {
    max-width: 48px;
}
</style>>