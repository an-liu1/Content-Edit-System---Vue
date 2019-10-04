<template>
    <!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <h3>NAVIGATION</h3>
        <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>Dashboards
                </template>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-message"></i>SomoPlay
                </template>
                <el-menu-item-group v-for="(item,index) in menu"
                            :key="index">
    <router-link tag="el-menu-item" :to="/somoplay/ + item">{{ item }}</router-link>-->
    <!-- <el-menu-item index="1-1">选项1</el-menu-item> -->
    <!-- </el-menu-item-group>

            </el-submenu>
        </el-menu>
    </el-aside>-->

    <div class="left-side-menu">
        <div class="slimscroll-menu">
            <div id="sidebar-menu">
                <ul class="metismenu" id="side-menu">
                    <li class="menu-title">Navigation</li>

                    <li>
                        <a href="javascript: void(0);">
                            <i class="fe-airplay"></i>
                            <span class="badge badge-success badge-pill float-right">4</span>
                            <span>Dashboards</span>
                        </a>
                    </li>
                    <el-menu>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-message"></i>
                                <span>SomoPlay</span>
                            </template>
                            <el-menu-item-group
                                class="nav-second-level"
                                v-for="(item,index) in menu"
                                :key="index"
                            >
                                <router-link tag="el-menu-item" :to="/somoplay/ + item">{{ item }}</router-link>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>

                    <!-- <li>
                        <a href="javascript: void(0);">
                            <i class="fe-pocket"></i>
                            <span>Somoplay</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul
                            class="nav-second-level"
                            aria-expanded="false"
                            v-for="(item,index) in menu"
                            :key="index"
                        >
                            <li>
                                <router-link :to="/somoplay/ + item">{{ item }}</router-link>
                            </li>
                        </ul>
                    </li>-->
                </ul>
            </div>

            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [],
            options: {
                height: "100%",
                position: "right",
                size: "8px",
                color: "#9ea5ab",
                wheelStep: 20,
                touchScrollStep: 200
            }
        };
    },
    created() {
        this.$http
            .get(
                "http://159.89.121.159:3001/somo/contentByApp?appName=somoplay&page=0&size=1000"
            )
            .then(response => {
                return response.data;
            })
            .then(res => {
                var arr = [];
                res.data.forEach(a => {
                    arr.push(a.sectionName);
                });
                this.menu = new Set(arr);
            });
    }
};
</script>

<style lang="scss" scoped>
// Metis Menu Overwrite
.metismenu {
    padding: 0;

    li {
        list-style: none;
    }
    ul {
        padding: 0;
        li {
            width: 100%;
        }
    }
}
.nav-second-level {
    el-menu-item {
        padding: 8px 20px;
        color: $menu-item;
        display: block;
        position: relative;
        transition: all 0.4s;
        font-size: 0.875rem;
        &:focus,
        &:hover {
            color: $menu-item-hover;
        }
    }
}

.nav-second-level,
.nav-thrid-level {
    li {
        a {
            padding: 8px 20px;
            color: $menu-item;
            display: block;
            position: relative;
            transition: all 0.4s;
            font-size: 0.875rem;
            &:focus,
            &:hover {
                color: $menu-item-hover;
            }
        }
    }
}

.nav-second-level,
.nav-third-level {
    li.active {
        > a {
            color: $menu-item-active;
        }
    }
}

// Wrapper
#wrapper {
    height: 100%;
    overflow: hidden;
    width: 100%;
}

//Content Page
.content-page {
    margin-left: $leftbar-width;
    overflow: hidden;
    padding: 0 15px 5px 15px;
    min-height: 80vh;
    margin-top: $topbar-height;
}

// Sidemenu
.left-side-menu {
    width: $leftbar-width;
    background: $bg-leftbar;
    bottom: 0;
    padding: 20px 0;
    position: fixed;
    transition: all 0.2s ease-out;
    top: $topbar-height;
    box-shadow: $shadow;
}

// Sidebar
#sidebar-menu {
    > ul {
        > li {
            > a {
                color: $menu-item;
                display: block;
                padding: 13px 20px;
                position: relative;
                transition: all 0.4s;
                font-family: $font-family-secondary;
                font-size: 0.95rem;

                &:hover,
                &:focus,
                &:active {
                    color: $menu-item-hover;
                    text-decoration: none;
                }
                > span {
                    vertical-align: middle;
                }

                i {
                    display: inline-block;
                    line-height: 1.0625rem;
                    margin: 0 10px 0 3px;
                    text-align: center;
                    vertical-align: middle;
                    width: 20px;
                }
                .drop-arrow {
                    float: right;
                    i {
                        margin-right: 0;
                    }
                }
            }
            > a.active {
                color: $menu-item-active;
            }

            > ul {
                padding-left: 40px;

                ul {
                    padding-left: 20px;
                }
            }
        }
    }
    .menu-arrow {
        transition: transform 0.15s;
        position: absolute;
        right: 20px;
        display: inline-block;
        font-family: "Material Design Icons";
        text-rendering: auto;
        line-height: 1.5rem;
        font-size: 1.1rem;
        transform: translate(0, 0);
        &:before {
            content: "\F142";
        }
    }
    .badge {
        margin-top: 4px;
    }

    li.active {
        > a {
            > span.menu-arrow {
                transform: rotate(90deg);
            }
        }
    }

    .menu-title {
        padding: 10px 20px;
        letter-spacing: 0.05em;
        pointer-events: none;
        cursor: default;
        font-size: 0.6875rem;
        text-transform: uppercase;
        color: $menu-item;
        font-weight: $font-weight-semibold;
    }
}

// Enlarge menu
.enlarged {
    .logo-box {
        width: $leftbar-width-collapsed !important;
    }

    .logo {
        span.logo-lg {
            display: none;
        }
        span.logo-sm {
            display: block;
        }
    }
    // Side menu
    .left-side-menu {
        position: absolute;
        padding-top: 0;
        width: $leftbar-width-collapsed !important;
        z-index: 5;

        .slimScrollDiv,
        .slimscroll-menu {
            overflow: inherit !important;
            height: auto !important;
        }
        .slimScrollBar {
            visibility: hidden;
        }

        // Sidebar Menu
        #sidebar-menu {
            .menu-title,
            .menu-arrow,
            .label,
            .badge,
            .collapse.in {
                display: none !important;
            }
            .nav.collapse {
                height: inherit !important;
            }

            > ul {
                > li {
                    position: relative;
                    white-space: nowrap;

                    > a {
                        padding: 15px 20px;
                        min-height: 54px;
                        transition: none;

                        &:hover,
                        &:active,
                        &:focus {
                            color: $menu-item-hover;
                        }
                        i {
                            font-size: 1.125rem;
                            margin-right: 20px;
                        }

                        span {
                            display: none;
                            padding-left: 25px;
                        }
                    }

                    &:hover {
                        > a {
                            position: relative;
                            width: calc(190px + #{$leftbar-width-collapsed});
                            color: $menu-item-active;
                            background-color: $gray-100;

                            span {
                                display: inline;
                            }
                        }

                        a.open,
                        a.active {
                            :after {
                                display: none;
                            }
                        }

                        > ul {
                            display: block;
                            left: $leftbar-width-collapsed;
                            position: absolute;
                            width: 190px;
                            height: auto !important;
                            box-shadow: 3px 5px 10px 0 rgba(154, 161, 171, 0.2);

                            ul {
                                box-shadow: 3px 5px 10px 0
                                    rgba(154, 161, 171, 0.2);
                            }
                            a {
                                box-shadow: none;
                                padding: 8px 20px;
                                position: relative;
                                width: 190px;
                                z-index: 6;
                                &:hover {
                                    color: $menu-item-hover;
                                }
                            }
                        }
                    }
                }

                ul {
                    padding: 5px 0;
                    z-index: 9999;
                    background-color: $bg-leftbar;

                    li {
                        &:hover {
                            > ul {
                                display: block;
                                left: 190px;
                                margin-top: -36px;
                                position: absolute;
                                width: 190px;
                            }
                        }

                        > a {
                            span.pull-right {
                                position: absolute;
                                right: 20px;
                                top: 12px;
                                transform: rotate(270deg);
                            }
                        }
                    }
                    li.active {
                        a {
                            color: $menu-item-active;
                        }
                    }
                }
            }
        }
    }

    // Content Page
    .content-page {
        margin-left: $leftbar-width-collapsed !important;
    }

    //Footer
    .footer {
        left: $leftbar-width-collapsed !important;
    }

    //User box
    .user-box {
        display: none;
    }
}

// Body min-height set
body.enlarged {
    min-height: 1200px;
}

@include media-breakpoint-down(sm) {
    body {
        overflow-x: hidden;
        padding-bottom: 80px;
    }
    .left-side-menu {
        display: none;
        z-index: 10 !important;
    }
    .sidebar-enable {
        .left-side-menu {
            display: block;
        }
    }
    .content-page,
    .enlarged .content-page {
        margin-left: 0 !important;
        padding: 0 10px;
    }
    .pro-user-name {
        display: none;
    }
    .logo-box {
        display: none;
    }
}

/* =============
  Small Menu
============= */

.left-side-menu-sm {
    .logo-box {
        width: $leftbar-width-sm;
    }
    .left-side-menu {
        width: $leftbar-width-sm;
        text-align: center;
        #sidebar-menu {
            > ul {
                > li {
                    > a {
                        > i {
                            display: block;
                            font-size: 18px;
                            line-height: 24px;
                            width: 100%;
                            margin: 0;
                        }
                    }
                }
                ul {
                    padding-left: 0;
                    a {
                        padding: 10px 20px;
                    }
                }
            }
        }
        .menu-arrow,
        .badge {
            display: none !important;
        }
        & + .content-page {
            margin-left: $leftbar-width-sm;
        }
        + .content-page .footer {
            left: $leftbar-width-sm;
        }

        .menu-title {
            background-color: $gray-100;
        }
    }
}

.enlarged.left-side-menu-sm {
    #wrapper {
        .left-side-menu {
            text-align: left;

            ul {
                li {
                    a {
                        i {
                            display: inline-block;
                            font-size: 18px;
                            line-height: 17px;
                            margin-left: 3px;
                            margin-right: 15px;
                            vertical-align: middle;
                            width: 20px;
                        }
                    }
                }
            }
        }
    }
}

// Leftbar-dark
.left-side-menu-dark {
    .navbar-custom {
        background-color: $blue;
    }

    .left-side-menu {
        background-color: $bg-leftbar-dark;
        box-shadow: none;
        border-right: 2px solid lighten($bg-leftbar-dark, 2%);

        #sidebar-menu {
            > ul {
                > li {
                    > a {
                        color: $menu-item-color-dark;

                        &:hover,
                        &:focus,
                        &:active {
                            color: $menu-item-hover-color-dark;
                        }
                    }
                    > a.active {
                        color: $menu-item-active-color-dark;
                        background-color: lighten($bg-leftbar-dark, 5%);
                        border-right-color: $menu-item-active-color-dark;
                    }
                }
            }

            .menu-title {
                color: $gray-500;
            }
        }

        .nav-second-level,
        .nav-thrid-level {
            li {
                a {
                    color: $menu-item-color-dark;
                    &:focus,
                    &:hover {
                        background-color: transparent;
                        color: $menu-item-hover-color-dark;
                    }
                }
            }
        }

        .nav-second-level,
        .nav-third-level {
            li.active {
                > a {
                    color: $menu-item-active-color-dark;
                }
            }
        }
    }
}

.enlarged.left-side-menu-dark #wrapper {
    .left-side-menu {
        #sidebar-menu {
            > ul {
                > li {
                    &:hover > a {
                        background-color: lighten($bg-leftbar-dark, 5%);
                    }
                }
            }
        }
    }
}

// Leftbar with user
.user-pro-dropdown {
    background-color: $gray-100;
    box-shadow: none;
    padding: 15px 5px;
    width: 90%;
    margin-left: 5%;
    margin-top: 10px;

    .dropdown-item {
        border-radius: 3px;

        &:hover {
            background-color: $primary;
            color: $white;
        }
    }
}
</style>