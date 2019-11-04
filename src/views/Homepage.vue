<template>
    <div>
        <nava />
        <con1 id="Home"/>
        <!-- <cli /> -->
        <fea id="Method"/>
        <dem id="Product"/>
        <pri id="Service"/>
        <faqs />
        <tes />
        <conta id="Contact"/>
        <cta />
        <foot />
    </div>
</template>

<script>
import nava from '@/components/landing/Nav';
import con1 from '@/components/landing/Home';
// import cli from '@/components/landing/Clients';
import fea from '@/components/landing/Features';
import dem from '@/components/landing/Demo';
import pri from '@/components/landing/Pricing';
import faqs from '@/components/landing/Faqs';
import tes from '@/components/landing/Testionial';
import conta from '@/components/landing/Contact';
import cta from '@/components/landing/Cta';
import foot from '@/components/landing/Footer';
export default {
    data(){
        return {

        }
    },
    components:{
        nava,
        con1,
        // cli,
        fea,
        dem,
        pri,
        faqs,
        tes,
        conta,
        cta,
        foot
    }
}
</script>

     
     <style>
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
    background: linear-gradient(to left, #1464ad,#348dc7,#4aa6d7, #1464ad);
    /* background-image: url(./public/images/12.jpeg); */
    
}


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