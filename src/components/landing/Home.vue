<template>
 <!-- home start -->
 <div>
        <section class="bg-home bg-gradient" >
            <!-- <div class="home-center"> -->
                <!-- <div class="home-desc0-center"> -->
                    <!-- <div class="container-fluid"> -->
                        <!-- <div class="row align-items-center"> -->
                            <!-- <div class="col-lg-6">
                                <div class="home-title mo-mb-20"> -->
                                    <div class="jk">
                                    <a href="" class="img-a">Design </a>
                                    <img class="dk" src="images/23.png" fluid alt="bg" >
                                    </div>
                                <!-- </div>
                            </div> -->
                            <!-- <div class="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-7">
                                <div class="home-img position-relative">
                                    <img src="images/home-img.png" alt class="home-first-img" />
                                    <img
                                        src="images/home-img.png"
                                        alt
                                        class="home-second-img mx-auto d-block"
                                    />
                                    <img src="images/home-img.png" alt class="home-third-img" />
                                </div>
                            </div> -->
                        <!-- </div> -->
                        <!-- end row -->
                    <!-- </div> -->
                    <!-- end container-fluid -->
                <!-- </div> -->
            <!-- </div> -->
        </section>
        <!-- home end -->
       
       

     

        <!-- features start -->
        <!-- <section class="section"> -->
            <!-- <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center mb-4 pb-1">
                            <h3>Ultra Features</h3>
                            <p
                                class="text-muted"
                            >The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business.</p>
                        </div>
                    </div>
                </div> -->
                <!-- end row -->

                <!-- <div
                    class="row align-items-center"
                    v-for="(item,index) in slideShow"
                    :key="index"
                    :style="{backgroundColor: item.backgroundColor}"
                >
                    <div class="col-lg-6">
                        <div class="feature-img">
                            <img :src="imgs(item)" alt class="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5 features-content">
                            <div class="features-icon mb-4">
                                <i class="mdi mdi-chart-bar h4 text-white text-center"></i>
                            </div>
                            <h3 class="mb-3">{{item.nameEn}}</h3>
                            <p class="text-muted mb-4">{{item.descriptionEn}}</p>
                            <router-link
                                tag="a"
                                :to="'/detail/' + item._id"
                                class="btn btn-primary btn-sm"
                            >
                                Learn More
                                <i class="mdi mdi-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>
                </div> -->
                <!-- end row -->

                <!-- <div class="row align-items-center mt-5">
                    <div class="col-lg-6">
                        <div class="p-5 features-content">
                            <div class="features-icon mb-4">
                                <i class="mdi mdi-auto-fix h4 text-white text-center"></i>
                            </div>
                            <h3 class="mb-3">Explore the new world of creativity</h3>
                            <p class="text-muted mb-4">
                                Everyone realizes why a new common language would be desirable one could refuse to expensive translators it would be necessary.
                            </p>
                            <a href="#" class="btn btn-primary btn-sm">Learn More <i class="mdi mdi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="feature-img">
                            <img src="images/features-img/img-1.png" alt="" class="img-fluid mx-auto d-block">
                        </div>
                    </div>
                </div>-->
                <!-- end row -->
            <!-- </div> -->
            <!-- end container-fluid -->
        <!-- </section> -->
        <!-- features end -->

       
       

     
      


       
        <!-- Back to top -->
        <a href="#" class="back-to-top" id="back-to-top">
            <i class="mdi mdi-chevron-up"></i>
        </a>
    </div>
    
</template>

<script>
import { getData, getImg } from "@/api/somoplay";
export default {
    data(){
        return {
            list:{},
            slideShow: {},
         
        };
    },
    methods: {
         async getList() {
            let res = await getData("?appName=somoplay&page=0&size=1000");
            this.list = res.data;
        },
        async getSlideShow() {
            let res = await getData(
                "?appName=somoplay&pageName=home&sectionName=slideShow"
            );
            this.slideShow = res.data;
        },
        
    },
    created() {
       
        this.getList();
        this.getSlideShow();
       
    },
    computed: {
        imgs: function() {
            return function(item) {
                return getImg(item.mainImageType + "/" + item.mainImage);
            };
                  }
    }
}
</script>
<style>
/*******************
    3.Home
*******************/

.jk
{

position: relative;
display: inline-block;
}
.dk
{
width: 100%;
height: 520px;
text-align: left;
box-shadow:0 0 50px 30px #9b1818 inset;

margin-top: -8em;
}
.dk:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow:0 0 50px 30px #ffffff inset;
}
.bg-home {
    position: relative;
    padding: 200px 0px 0px 0px;

}
.img-a
{
  position: absolute;
  bottom: 0;
  background: #333;
  color: rgb(206, 20, 20);

  font-size: 30em;
  display: none;
  z-index: 2;
}
.home-center {
    display: table;
    width: 100%;
    height: 100%;
    
}

.home-desc-center {
    display: table-cell;
    vertical-align: middle;
}

.home-title .home-desc {
    max-width: 605px;
    font-size: 16px;
}

.home-title .subscribe input {
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    height: 43px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.1);
}

.home-title .subscribe input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.home-title .subscribe input:-moz-placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.home-title .subscribe input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.home-title .subscribe input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.home-title .subscribe .btn {
    min-height: 43px;
}

.home-title .subscribe .form-control:focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.home-first-img {
    position: relative;
    z-index: 2;
    max-width: 300px;
}

.home-second-img {
    position: absolute;
    max-width: 250px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 61px;
    right: 0px;
    z-index: 1;
    opacity: 0.8;
}

.home-third-img {
    position: absolute;
    right: 0px;
    max-width: 200px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 0.7;
}

.clients {
    position: relative;
    top: -70px;
    -webkit-box-shadow: 0 10px 35px 0 rgba(154, 161, 171, 0.1);
    box-shadow: 0 10px 35px 0 rgba(154, 161, 171, 0.1);
    border-radius: 8px;
    margin-bottom: -70px;
}

.clients .client-images img {
    margin: 10px auto;
    opacity: 0.7;
    
}











</style>