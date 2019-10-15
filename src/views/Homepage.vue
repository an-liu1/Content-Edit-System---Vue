<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div class="container-fluid">
                <!-- LOGO -->
                <a
                    class="logo text-uppercase"
                    href="/index"
                    v-for="(item,index) in logo"
                    :key="index"
                >
                    <img :src="imgs(item)" alt height="30" />
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="mdi mdi-menu"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mx-auto navbar-center" id="mySidenav">
                        <li class="nav-item" v-for="(item, index) in navItem" :key="index">
                            <a :href="'./#' + item.nameEn + ''" class="nav-link">{{item.nameEn}}</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/dashboard" class="nav-link">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- home start -->
        <section class="bg-home bg-gradient" id="home">
            <div class="home-center">
                <div class="home-desc0-center">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="home-title mo-mb-20">
                                    <!-- <h1
                                        class="mb-4 text-white"
                                        v-for="(item,index) in list.slice(24,25)"
                                        :key="index"
                                    >{{item.nameEn}}</h1>
                                    <p
                                        class="text-white-50 home-desc mb-5"
                                        v-for="(item,index) in list.slice(25,27)"
                                        :key="index"
                                    >{{item.nameEn}}</p>-->
                                    <div class="subscribe">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <div class="mb-2">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Enter your e-mail address"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <button
                                                        type="submit"
                                                        class="btn btn-primary"
                                                    >Subscribe Us</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-7">
                                <div class="home-img position-relative">
                                    <img src="images/home-img.png" alt class="home-first-img" />
                                    <img
                                        src="images/home-img.png"
                                        alt
                                        class="home-second-img mx-auto d-block"
                                    />
                                    <img src="images/home-img.png" alt class="home-third-img" />
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end container-fluid -->
                </div>
            </div>
        </section>
        <!-- home end -->
        <!-- clients start -->
        <section>
            <div class="container-fluid">
                <div class="clients p-4 bg-white">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="client-images">
                                <img
                                    src="images/clients/1.png"
                                    alt="logo-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="client-images">
                                <img
                                    src="images/clients/3.png"
                                    alt="logo-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="client-images">
                                <img
                                    src="images/clients/4.png"
                                    alt="logo-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="client-images">
                                <img
                                    src="images/clients/6.png"
                                    alt="logo-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- clients end -->

        <!-- features start -->
        <section class="section-sm" id="features">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center mb-4 pb-1">
                            <h3 class="mb-3">The admin is fully responsive and easy to customize</h3>
                            <p
                                class="text-muted"
                            >The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business.</p>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-box">
                            <div class="features-img mb-4">
                                <img src="images/icons/layers.png" alt />
                            </div>
                            <h4 class="mb-2">Responsive Layouts</h4>
                            <p
                                class="text-muted"
                            >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4">
                        <div class="features-box">
                            <div class="features-img mb-4">
                                <img src="images/icons/core.png" alt />
                            </div>
                            <h4 class="mb-2">Based on Bootstrap UI</h4>
                            <p
                                class="text-muted"
                            >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4">
                        <div class="features-box">
                            <div class="features-img mb-4">
                                <img src="images/icons/paperdesk.png" alt />
                            </div>
                            <h4 class="mb-2">Creative Design</h4>
                            <p
                                class="text-muted"
                            >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->

                <div class="row justify-content-center">
                    <div class="col-lg-4">
                        <div class="features-box">
                            <div class="features-img mb-4">
                                <img src="images/icons/solarsystem.png" alt />
                            </div>
                            <h4 class="mb-3">Awesome Support</h4>
                            <p
                                class="text-muted"
                            >At solmen va esser necessi far uniform grammatica pronun e plu sommun paroles.</p>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4">
                        <div class="features-box">
                            <div class="features-img mb-4">
                                <img src="images/icons/datatext.png" alt />
                            </div>
                            <h4 class="mb-3">Easy to customize</h4>
                            <p
                                class="text-muted"
                            >If several languages coalesce the grammar of the is more simple languages.</p>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4">
                        <div class="features-box">
                            <div class="features-img mb-4">
                                <img src="images/icons/browserscript.png" alt />
                            </div>
                            <h4 class="mb-3">Quality Code</h4>
                            <p
                                class="text-muted"
                            >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- features end -->

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
                    <div class="col-lg-4 col-md-6">
                        <div class="demo-box bg-white mt-4 p-2">
                            <a href="#" class="text-dark">
                                <img
                                    src="images/demo/index_1.jpg"
                                    alt
                                    class="img-fluid mx-auto d-block"
                                />
                                <div class="p-3 text-center">
                                    <h5 class="mb-0">light Layouts</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4 col-md-6">
                        <div class="demo-box bg-white mt-4 p-2">
                            <a href="#" class="text-dark">
                                <img
                                    src="images/demo/index_2.jpg"
                                    alt
                                    class="img-fluid mx-auto d-block"
                                />
                                <div class="p-3 text-center">
                                    <h5 class="mb-0">Dark Layouts</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4 col-md-6">
                        <div class="demo-box bg-white mt-4 p-2">
                            <a href="#" class="text-dark">
                                <img
                                    src="images/demo/index_3.jpg"
                                    alt
                                    class="img-fluid mx-auto d-block"
                                />
                                <div class="p-3 text-center">
                                    <h5 class="mb-0">Material Design</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4 col-md-6">
                        <div class="demo-box bg-white mt-4 p-2">
                            <a href="#" class="text-dark">
                                <img
                                    src="images/demo/index_4.jpg"
                                    alt
                                    class="img-fluid mx-auto d-block"
                                />
                                <div class="p-3 text-center">
                                    <h5 class="mb-0">Purple Layouts</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4 col-md-6">
                        <div class="demo-box bg-white mt-4 p-2">
                            <a href="#" class="text-dark">
                                <img
                                    src="images/demo/index_5.jpg"
                                    alt
                                    class="img-fluid mx-auto d-block"
                                />
                                <div class="p-3 text-center">
                                    <h5 class="mb-0">Boxed Layouts</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4 col-md-6">
                        <div class="demo-box bg-white mt-4 p-2">
                            <a href="#" class="text-dark">
                                <img
                                    src="images/demo/index_6.jpg"
                                    alt
                                    class="img-fluid mx-auto d-block"
                                />
                                <div class="p-3 text-center">
                                    <h5 class="mb-0">Horizontal</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->

                <div class="row">
                    <div class="col-12">
                        <div class="text-center mt-4">
                            <button class="btn btn-info navbar-btn">
                                More Demos
                                <i class="mdi mdi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- available demos end -->

        <!-- features start -->
        <section class="section">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center mb-4 pb-1">
                            <h3>Ultra Features</h3>
                            <p
                                class="text-muted"
                            >The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business.</p>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div
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
                </div>
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
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- features end -->

        <!-- pricing start -->
        <section class="section pb-0 bg-gradient" id="pricing">
            <div class="bg-shape">
                <img src="images/bg-shape.png" alt class="img-fluid mx-auto d-block" />
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center mb-4">
                            <h3 class="text-white">Choose Our Pricing Plans</h3>
                            <p
                                class="text-white-50"
                            >The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business.</p>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <div class="pricing-plan bg-white p-4 mt-4">
                                    <div class="pricing-header text-center">
                                        <h5
                                            class="plan-title text-uppercase mb-4"
                                        >Single Application</h5>
                                        <h1>
                                            <sup>
                                                <small>$</small>
                                            </sup>24
                                        </h1>
                                        <div class="plan-duration text-muted">Per License</div>
                                    </div>
                                    <ul class="list-unstyled pricing-list mt-4">
                                        <li>
                                            <i class="mdi mdi-album"></i>
                                            <p>
                                                Number of end products
                                                <b>1</b>
                                            </p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-lifebuoy"></i>
                                            <p>Customer support</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-update"></i>
                                            <p>Free Updates</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-earth"></i>
                                            <p>1 Domain</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-history"></i>
                                            <p>Monthly updates</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-alarm-check"></i>
                                            <p>24x7 Support</p>
                                        </li>
                                    </ul>
                                    <div class="text-center mt-5">
                                        <a href="#" class="btn btn-primary">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->

                            <div class="col-lg-4">
                                <div class="pricing-plan active p-4 mt-4">
                                    <span class="lable">Popular</span>
                                    <div class="pricing-header text-white text-center">
                                        <h5
                                            class="plan-title text-white text-uppercase mb-4"
                                        >Multiple Application</h5>
                                        <h1 class="text-white">
                                            <sup>
                                                <small>$</small>
                                            </sup>120
                                        </h1>
                                        <div class="plan-duration">Per License</div>
                                    </div>
                                    <ul class="list-unstyled text-white pricing-list mt-4">
                                        <li>
                                            <i class="mdi mdi-album"></i>
                                            <p>
                                                Number of end products
                                                <b>1</b>
                                            </p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-lifebuoy"></i>
                                            <p>Customer support</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-update"></i>
                                            <p>Free Updates</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-earth"></i>
                                            <p>1 Domain</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-history"></i>
                                            <p>Monthly updates</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-alarm-check"></i>
                                            <p>24x7 Support</p>
                                        </li>
                                    </ul>
                                    <div class="text-center mt-5">
                                        <a href="#" class="btn shadow btn-light">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->

                            <div class="col-lg-4">
                                <div class="pricing-plan bg-white p-4 mt-4">
                                    <div class="pricing-header text-center">
                                        <h5 class="plan-title text-uppercase mb-4">Extended</h5>
                                        <h1>
                                            <sup>
                                                <small>$</small>
                                            </sup>999
                                        </h1>
                                        <div class="plan-duration text-muted">Per License</div>
                                    </div>
                                    <ul class="list-unstyled pricing-list mt-4">
                                        <li>
                                            <i class="mdi mdi-album"></i>
                                            <p>
                                                Number of end products
                                                <b>1</b>
                                            </p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-lifebuoy"></i>
                                            <p>Customer support</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-update"></i>
                                            <p>Free Updates</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-earth"></i>
                                            <p>1 Domain</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-history"></i>
                                            <p>Monthly updates</p>
                                        </li>
                                        <li>
                                            <i class="mdi mdi-alarm-check"></i>
                                            <p>24x7 Support</p>
                                        </li>
                                    </ul>
                                    <div class="text-center mt-5">
                                        <a href="#" class="btn btn-primary">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end col-xl-10 -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- pricing end -->

        <!-- faqs start -->
        <section class="section" id="faq">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center mb-5">
                            <h3>Frequently Asked Questions</h3>
                            <p class="text-muted">At solmen va esser necessi far uniform grammatica.</p>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row">
                    <div class="col-lg-5 offset-lg-1">
                        <!-- Question/Answer -->
                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question">What is Lorem Ipsum?</h4>
                            <p
                                class="faq-answer mb-4 pb-1 text-muted"
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                        <!-- Question/Answer -->
                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question">Why use Lorem Ipsum?</h4>
                            <p
                                class="faq-answer mb-4 pb-1 text-muted"
                            >Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis suavitate disputando nam. Mutat convenirete.</p>
                        </div>

                        <!-- Question/Answer -->
                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question">How many variations exist?</h4>
                            <p
                                class="faq-answer mb-4 pb-1 text-muted"
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <!--/col-lg-5 -->

                    <div class="col-lg-5">
                        <!-- Question/Answer -->
                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question">Is safe use Lorem Ipsum?</h4>
                            <p
                                class="faq-answer mb-4 pb-1 text-muted"
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                        <!-- Question/Answer -->
                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question">When can be used?</h4>
                            <p
                                class="faq-answer mb-4 pb-1 text-muted"
                            >Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis suavitate disputando nam. Mutat convenirete.</p>
                        </div>

                        <!-- Question/Answer -->
                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question">License &amp; Copyright</h4>
                            <p
                                class="faq-answer mb-4 pb-1 text-muted"
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <!--/col-lg-5-->
                </div>
                <!-- end row -->
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- faqs end -->

        <!-- testimonial start -->
        <section class="section bg-light" id="clients">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center mb-4">
                            <h3>What our Users Says</h3>
                            <p
                                class="text-muted"
                            >The clean and well commented code allows easy customization of the theme.It's designed for describing your app, agency or business.</p>
                        </div>
                    </div>
                </div>
                <!-- end row -->
                <div class="row">
                    <div class="col-lg-4">
                        <div class="testi-box mt-4">
                            <div class="testi-desc bg-white p-4">
                                <p
                                    class="text-muted mb-0"
                                >" Excellent support for a tricky issue related to our customization of the template. Author kept us updated as he made progress on the issue and emailed us a patch when he was done. "</p>
                            </div>
                            <div class="p-4">
                                <div class="testi-img float-left mr-2">
                                    <img src="images/testi/img-2.png" alt class="rounded-circle" />
                                </div>
                                <div>
                                    <h5 class="mb-0">Michael Morrell</h5>
                                    <p class="text-muted m-0">
                                        <small>- Ubold User</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4">
                        <div class="testi-box mt-4">
                            <div class="testi-desc bg-white p-4">
                                <p
                                    class="text-muted mb-0"
                                >" Flexible, Everything is in, Suuuuuper light, even for the code is much easier to cut and make it a theme for a productive app. "</p>
                            </div>
                            <div class="p-4">
                                <div class="testi-img float-left mr-2">
                                    <img src="images/testi/img-1.png" alt class="rounded-circle" />
                                </div>
                                <div>
                                    <h5 class="mb-0">John Seidel</h5>
                                    <p class="text-muted m-0">
                                        <small>- Ubold User</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4">
                        <div class="testi-box mt-4">
                            <div class="testi-desc bg-white p-4">
                                <p
                                    class="text-muted mb-0"
                                >" Not only the code, design and support are awesome, but they also update it constantly the template with new content, new plugins. I will buy surely another coderthemes template! "</p>
                            </div>
                            <div class="p-4">
                                <div class="testi-img float-left mr-2">
                                    <img src="images/testi/img-3.png" alt class="rounded-circle" />
                                </div>
                                <div>
                                    <h5 class="mb-0">Robert Taylor</h5>
                                    <p class="text-muted m-0">
                                        <small>- Ubold User</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- testimonial end -->

        <!-- contact start -->
        <section class="section pb-0 bg-gradient" id="contact">
            <div class="bg-shape">
                <img src="images/bg-shape-light.png" alt class="img-fluid mx-auto d-block" />
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title text-center mb-4">
                            <h3 class="text-white">Have any Questions ?</h3>
                            <p
                                class="text-white-50"
                            >Please fill out the following form and we will get back to you shortly</p>
                        </div>
                    </div>
                </div>
                <!-- end row -->
                <div class="row mb-4">
                    <div class="col-lg-4">
                        <div class="contact-content text-center mt-4">
                            <div class="contact-icon mb-2">
                                <i class="mdi mdi-email-outline text-info h2"></i>
                            </div>
                            <div class="contact-details text-white">
                                <h5 class="text-white">E-mail</h5>
                                <p class="text-white-50">example@abc.com</p>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4">
                        <div class="contact-content text-center mt-4">
                            <div class="contact-icon mb-2">
                                <i class="mdi mdi-cellphone-iphone text-info h2"></i>
                            </div>
                            <div class="contact-details">
                                <h5 class="text-white">Phone</h5>
                                <p class="text-white-50">012-345-6789</p>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-4">
                        <div class="contact-content text-center mt-4">
                            <div class="contact-icon mb-2">
                                <i class="mdi mdi-map-marker text-info h2"></i>
                            </div>
                            <div class="contact-details">
                                <h5 class="text-white">Address</h5>
                                <p class="text-white-50">4413 Redbud Drive, New York</p>
                            </div>
                        </div>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->

                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="custom-form p-5 bg-white">
                            <div id="message"></div>
                            <form
                                method="post"
                                action="php/contact.php"
                                name="contact-form"
                                id="contact-form"
                            >
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="name">Name</label>
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                class="form-control"
                                                placeholder="Enter your name..."
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="email">Email address</label>
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                class="form-control"
                                                placeholder="Enter your email..."
                                            />
                                        </div>
                                    </div>
                                </div>
                                <!-- end row -->

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="subject">Subject</label>
                                            <input
                                                name="subject"
                                                id="subject"
                                                type="text"
                                                class="form-control"
                                                placeholder="Enter Subject..."
                                            />
                                        </div>
                                    </div>
                                </div>
                                <!-- end row -->

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="comments">Message</label>
                                            <textarea
                                                name="comments"
                                                id="comments"
                                                rows="4"
                                                class="form-control"
                                                placeholder="Enter your message..."
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <!-- end row -->

                                <div class="row">
                                    <div class="col-lg-12 text-right">
                                        <input
                                            type="submit"
                                            id="submit"
                                            name="send"
                                            class="submitBnt btn btn-danger"
                                            value="Send Message"
                                        />
                                        <div id="simple-msg"></div>
                                    </div>
                                </div>
                                <!-- end row -->
                            </form>
                        </div>
                        <!-- end custom-form -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- contact end -->

        <!-- cta start -->
        <section class="section-sm bg-light">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-9">
                        <h3 class="mb-0 mo-mb-20">We also customize the theme as per your needs</h3>
                    </div>
                    <div class="col-md-3">
                        <div class="text-md-right">
                            <a href="#" class="btn btn-outline-dark btn-rounded">
                                <i class="mdi mdi-email-outline mr-1"></i> Contact Us
                            </a>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end container-fluid -->
        </section>
        <!-- cta end -->

        <!-- footer start -->
        <footer class="bg-dark footer">
            <div class="container-fluid">
                <div class="row mb-5">
                    <div class="col-lg-4">
                        <div class="pr-lg-4">
                            <div class="mb-4">
                                <img src="images/logo-light.png" alt height="20" />
                            </div>
                            <!-- <div v-for="(item,index) in list.slice(13,16)" :key="index">
                                <p class="text-white-50">{{item.nameEn}}</p>
                            </div>-->
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

        <!-- Back to top -->
        <a href="#" class="back-to-top" id="back-to-top">
            <i class="mdi mdi-chevron-up"></i>
        </a>
    </div>
</template>

<script>
import { getData, getImg } from "@/api/somoplay";
export default {
    data() {
        return {
            logo: {},
            navItem: {},
            list: {},
            slideShow: {},
            footer: {}
        };
    },
    methods: {
        async getLogo() {
            let res = await getData(
                "?appName=somoplay&pageName=all&sectionName=logo"
            );
            this.logo = res.data;
        },
        async getNav() {
            let res = await getData(
                "?appName=somoplay&pageName=all&sectionName=topMenu"
            );
            this.navItem = res.data;
        },
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
        async getFooter() {
            let res = await getData(
                "?appName=somoplay&pageName=all&sectionName=footer"
            );
            this.footer = res.data;
        }
    },
    created() {
        this.getNav();
        this.getLogo();
        this.getList();
        this.getSlideShow();
        this.getFooter();
    },
    computed: {
        imgs: function() {
            return function(item) {
                return getImg(item.mainImage);
            };
        }
    }
};
</script>

<style scoped>
@font-face {
    font-family: "Cerebri Sans,sans-serif";
    src: url("../fonts/cerebrisans-light.eot");
    src: local("Cerebri-sans Light"),
        url("../fonts/cerebrisans-light.woff") format("woff");
    font-weight: 300;
}

@font-face {
    font-family: "Cerebri Sans,sans-serif";
    src: url("../fonts/cerebrisans-regular.eot");
    src: local("Cerebri-sans Regular"),
        url("../fonts/cerebrisans-regular.woff") format("woff");
    font-weight: 400;
}
@font-face {
    font-family: "Cerebri Sans,sans-serif";
    src: url("../fonts/cerebrisans-medium.eot");
    src: local("Cerebri-sans Medium"),
        url("../fonts/cerebrisans-medium.woff") format("woff");
    font-weight: 500;
}
@font-face {
    font-family: "Cerebri Sans,sans-serif";
    src: url("../fonts/cerebrisans-semibold.eot");
    src: local("Cerebri-sans Semibold"),
        url("../fonts/cerebrisans-semibold.woff") format("woff");
    font-weight: 600;
}
@font-face {
    font-family: "Cerebri Sans,sans-serif";
    src: url("../fonts/cerebrisans-bold.eot");
    src: local("Cerebri-sans Bold"),
        url("../fonts/cerebrisans-bold.woff") format("woff");
    font-weight: 700;
}

body {
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    background-color: #ffffff;
    height: auto !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Cerebri Sans,sans-serif";
}

h3 {
    line-height: 30px;
}

a {
    text-decoration: none !important;
    outline: none;
}

p {
    line-height: 1.6;
    font-size: 15px;
}

.section {
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
}

.section-sm {
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
}

.bg-gradient {
    background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(#673ab7),
        to(#3e1e8c)
    );
    background: linear-gradient(to left, #673ab7, #3e1e8c);
}

/**BACK TO TOP**/
.back-to-top {
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 10px;
    right: 20px;
    display: none;
    text-align: center;
    z-index: 10000;
    border-radius: 3px;
    background-color: #673ab7;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}

.back-to-top i {
    color: #ffffff;
    font-size: 22px;
    display: block;
    line-height: 30px;
}

/******************
    2.Navbar
*******************/
.navbar-custom {
    padding: 20px 0px;
    width: 100%;
    border-radius: 0px;
    z-index: 999;
    margin-bottom: 0px;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}

.navbar-custom .logo .logo-light {
    display: inline-block;
}

.navbar-custom .logo .logo-dark {
    display: none;
}

.navbar-custom .navbar-nav .nav-item .nav-link {
    line-height: 26px;
    color: rgba(255, 255, 255, 0.6);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    background-color: transparent !important;
    padding: 6px 10px;
    margin: 0 7px;
    font-weight: 600;
}

.navbar-custom .navbar-nav .nav-item .nav-link:hover,
.navbar-custom .navbar-nav .nav-item .nav-link:active {
    color: #ffffff;
}

.navbar-custom .navbar-nav .nav-item.active .nav-link {
    color: #ffffff;
}

.navbar-toggler {
    font-size: 24px;
    margin-top: 5px;
    margin-bottom: 0px;
    color: #ffffff;
}

/*--- navbar sticky ---*/
.nav-sticky.navbar-custom {
    margin-top: 0px;
    padding: 10px 0px;
    background-color: #ffffff;
    -webkit-box-shadow: 0 10px 33px -14px rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 33px -14px rgba(0, 0, 0, 0.1);
}

.nav-sticky.navbar-custom .logo .logo-dark {
    display: inline-block;
}

.nav-sticky.navbar-custom .logo .logo-light {
    display: none;
}

.nav-sticky.navbar-custom .navbar-nav .nav-item .nav-link {
    color: rgba(40, 40, 46, 0.8);
}

.nav-sticky.navbar-custom .navbar-nav .nav-item .nav-link:hover,
.nav-sticky.navbar-custom .navbar-nav .nav-item .nav-link:active {
    color: #673ab7;
}

.nav-sticky.navbar-custom .navbar-nav .nav-item.active .nav-link {
    color: #673ab7;
}

/*******************
    3.Home
*******************/
.bg-home {
    position: relative;
    padding: 200px 0px 180px 0px;
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

/*******************
    5.demo
********************/
.demo-box,
.testi-desc {
    -webkit-box-shadow: 0 10px 35px 0 rgba(154, 161, 171, 0.1);
    box-shadow: 0 10px 35px 0 rgba(154, 161, 171, 0.1);
    border-radius: 7px;
}

/*******************
    6.pricing
********************/
.pricing-plan {
    position: relative;
    overflow: hidden;
    -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    border-radius: 9px;
    max-width: 370px;
    margin: 0px auto;
}

.pricing-plan .lable {
    background-color: #f9f9f9;
    color: #673ab7;
    font-size: 12px;
    font-weight: 700;
    right: -26px;
    padding: 2px 25px;
    position: absolute;
    text-transform: uppercase;
    top: 20px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.pricing-plan.active {
    background-image: linear-gradient(120deg, #63e4ec 0%, #3db9dc 100%);
}

.pricing-list {
    padding-left: 20px;
}

.pricing-list li {
    padding-left: 25px;
    position: relative;
}

.pricing-list li i {
    position: absolute;
    left: 0;
}

.bg-shape {
    position: absolute;
    bottom: -1px;
    left: 0px;
    right: 0px;
}

.bg-shape img {
    width: 100%;
}

/*******************
    7.faqs
********************/
.faq-question-q-box {
    height: 30px;
    width: 30px;
    color: #673ab7;
    text-align: center;
    border-radius: 50%;
    float: left;
    font-weight: 700;
    line-height: 30px;
    background-color: rgba(103, 58, 183, 0.15);
}

.faq-question {
    margin-top: 0;
    margin-left: 50px;
    font-size: 16px;
}

.faq-answer {
    margin-left: 50px;
    font-size: 14.5px;
}

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

/*******************
    9.contact
********************/
.custom-form {
    -webkit-box-shadow: 0 10px 35px 0 rgba(154, 161, 171, 0.1);
    box-shadow: 0 10px 35px 0 rgba(154, 161, 171, 0.1);
    border-radius: 8px;
}

.custom-form .form-group {
    margin-bottom: 1.5rem;
}

.custom-form .form-group .form-control {
    height: 43px;
}

.custom-form .form-group textarea.form-control {
    height: auto;
}

.error {
    margin: 8px 0px;
    display: none;
    color: #ff5d48;
}

#ajaxsuccess {
    font-size: 16px;
    width: 100%;
    display: none;
    clear: both;
    margin: 8px 0px;
}

.error_message {
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    color: #806027;
    background-color: #fdf1db;
    border-color: #fdebcd;
    border-radius: 5px;
    font-size: 14px;
}

.contact-loader {
    display: none;
}

#success_page {
    text-align: center;
    margin-bottom: 50px;
}

#success_page h3 {
    color: #10c469;
    font-size: 22px;
}

/*******************
    10.cta
********************/
.cta {
    background-image: linear-gradient(120deg, #63e4ec 0%, #3db9dc 100%);
    border-radius: 8px;
}

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

/******************
    12.Responsive
*******************/
@media (min-width: 200px) and (max-width: 1199px) {
    .container-fluid {
        max-width: 95%;
    }
}

@media (min-width: 1200px) {
    .container-fluid {
        max-width: 85%;
    }
}

@media (min-width: 1600px) {
    .container-fluid {
        max-width: 70%;
    }
}

@media (min-width: 200px) and (max-width: 768px) {
    .navbar-custom {
        margin-top: 0px;
        padding: 10px 0px !important;
        background-color: #ffffff !important;
        -webkit-box-shadow: 0 10px 33px -14px rgba(0, 0, 0, 0.1);
        box-shadow: 0 10px 33px -14px rgba(0, 0, 0, 0.1);
    }
    .navbar-custom .logo .logo-dark {
        display: inline-block;
    }
    .navbar-custom .logo .logo-light {
        display: none;
    }
    .navbar-custom .navbar-nav .nav-item .nav-link {
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
        color: rgba(40, 40, 46, 0.8) !important;
        margin: 0px;
        padding: 6px 0px;
    }
    .navbar-custom .navbar-nav .nav-item.active .nav-link {
        color: #673ab7 !important;
    }
    .navbar-toggler {
        font-size: 24px;
        margin-top: 0px;
        margin-bottom: 0px;
        color: #28282e;
    }
    .bg-home {
        padding: 130px 0px 120px 0px;
    }
    .mo-mb-20 {
        margin-bottom: 20px !important;
    }
}

@media (max-width: 425px) {
    .home-title h1 {
        font-size: 34px;
    }
    .home-img {
        display: none;
    }
    .features-content,
    .cta,
    .custom-form {
        padding: 24px !important;
    }
    .pull-none {
        float: none !important;
        text-align: center;
    }
}
</style>