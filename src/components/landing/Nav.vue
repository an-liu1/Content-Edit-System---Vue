<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
    <div class="container-fluid">
      <!-- LOGO -->
      <a class="logo text-uppercase" href="/index" v-for="(item,index) in logo" :key="index">
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
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mx-auto navbar-center" id="mySidenav">
          <li class="nav-item" v-for="(item, index) in navItem" :key="index">
            <a :href="'#' + item.nameEn" class="nav-link">{{item.nameEn}}</a>
          </li>
          <!-- <li class="nav-item">
            <a href="#/dashboard" class="nav-link">Admin</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { getData, getImg } from "@/api/somoplay";
export default {
  data() {
    return {
      navItem: {},
      logo: {}
    };
  },
  created(){
      this.getNav()
      this.getLogo()
  },
  methods: {
    async getNav() {
      let res = await getData(
        "?appName=somoplay&pageName=all&sectionName=topMenu"
      );
      this.navItem = res.data;
    },
    async getLogo() {
      let res = await getData(
        "?appName=somoplay&pageName=all&sectionName=logo"
      );
      this.logo = res.data;
    }
  },
  computed: {
    imgs: function() {
      return function(item) {
        return getImg(item.mainImage);
      }
    }
  }
};
</script>

<style >
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
    background-color: #ffffff;
}

.navbar-custom .navbar-nav .nav-item .nav-link {
    line-height: 10px;
    color: rgba(0, 0, 0, 0.6);
    padding: 6px 10px;
    margin: 0 7px;
    font-weight: 600;
}

.navbar-custom .navbar-nav .nav-item .nav-link:hover,
.navbar-custom .navbar-nav .nav-item .nav-link:active {
    color: #673ab7;
}

.navbar-custom .navbar-nav .nav-item.active .nav-link {
    color: #ffffff;
}

.navbar-toggler {
    font-size: 24px;
    margin-top: 5px;
    margin-bottom: 0px;
    color: #000000;
}
</style>