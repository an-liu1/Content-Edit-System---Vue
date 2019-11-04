<template>
     <!-- footer start -->
        <footer class="bg-dark footer">
            <div class="container-fluid">
                <div class="row mb-5">
                    <div class="col-lg-4">
                        <div class="pr-lg-4">
                            <div class="mb-4">
                                <img src="images/logo1.png" alt height="50" />
                            </div>
                            <!-- <div v-for="(item,index) in list.slice(13,16)" :key="index">
                                <p class="text-white-50">{{item.nameEn}}</p>
                            </div> -->
                            <!-- <p class="text-white-50">Ubold is a fully featured premium admin template built on top of awesome Bootstrap 4.1.3, modern web technology HTML5, CSS3 and jQuery.</p> -->
                        </div>
                    </div>

                    <div class="col-lg-2">
                        <div class="footer-list">
                            <p class="text-white mb-2 footer-list-title">About</p>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Faq
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Clients
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2">
                        <div class="footer-list">
                            <p class="text-white mb-2 footer-list-title">Social</p>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Behance
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Dribble
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2">
                        <div class="footer-list">
                            <p class="text-white mb-2 footer-list-title">Support</p>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Help & Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2">
                        <div class="footer-list">
                            <p class="text-white mb-2 footer-list-title">More Info</p>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>For Marketing
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>For Agencies
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-chevron-right mr-2"></i>Our Apps
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row">
                    <div class="col-lg-12">
                        <div
                            class="float-left pull-none"
                            v-for="(item, index) in footer"
                            :key="index"
                        >
                            <p class="text-white-50">{{item.nameEn}}</p>
                        </div>
                        <div class="float-right pull-none">
                            <ul class="list-inline social-links">
                                <li class="list-inline-item text-white-50">Social :</li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="mdi mdi-facebook"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="mdi mdi-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="mdi mdi-instagram"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="mdi mdi-google-plus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- container-fluid -->
        </footer>
        <!-- footer end -->

</template>

<style >
/*******************
    11.footer
********************/
.footer {
    padding: 60px 0px 20px 0px;
}

.footer .footer-list li {
    padding: 7px 0px;
}

.footer .footer-list li a {
    color: rgba(255, 255, 255, 0.4);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
}

.footer .footer-list li a:hover {
    color: #ffffff;
}

.footer .social-links li a {
    color: rgba(255, 255, 255, 0.4);
    font-size: 18px;
    padding: 0px 5px;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
}

.footer .social-links li a:hover {
    color: #ffffff;
}

</style>

<script>
import { getData, getImg} from '@/api/somoplay'
export default {
    data(){
        return {
            footer:{}
        };
    },
methods: {
    async getFooter() {
            let res = await getData(
                "?appName=somoplay&pageName=all&sectionName=footer"
            );
            this.footer = res.data;
        },
},

created() {
    this.getFooter()
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