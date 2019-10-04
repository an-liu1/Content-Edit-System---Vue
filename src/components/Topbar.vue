<template>
    <!-- Topbar Start -->
    <div class="navbar-custom">
        <ul class="list-unstyled topnav-menu float-right mb-0">
            <li class="d-none d-sm-block">
                <form class="app-search">
                    <div class="app-search-box">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search..." />
                            <div class="input-group-append">
                                <button class="btn" type="submit">
                                    <i class="fe-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </li>

            <li class="dropdown notification-list">
                <a
                    class="nav-link dropdown-toggle waves-effect waves-light"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                >
                    <i class="fe-bell noti-icon"></i>
                    <span class="badge badge-danger rounded-circle noti-icon-badge">9</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-lg">
                    <!-- item-->
                    <div class="dropdown-item noti-title">
                        <h5 class="m-0">
                            <span class="float-right">
                                <a href class="text-dark">
                                    <small>Clear All</small>
                                </a>
                            </span>Notification
                        </h5>
                    </div>

                    <div class="slimscroll noti-scroll">
                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item active">
                            <div class="notify-icon">
                                <img
                                    src="assets/images/users/user-1.jpg"
                                    class="img-fluid rounded-circle"
                                    alt
                                />
                            </div>
                            <p class="notify-details">Cristina Pride</p>
                            <p class="text-muted mb-0 user-msg">
                                <small>Hi, How are you? What about our next meeting</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-primary">
                                <i class="mdi mdi-comment-account-outline"></i>
                            </div>
                            <p class="notify-details">
                                Caleb Flakelar commented on Admin
                                <small class="text-muted">1 min ago</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon">
                                <img
                                    src="assets/images/users/user-4.jpg"
                                    class="img-fluid rounded-circle"
                                    alt
                                />
                            </div>
                            <p class="notify-details">Karen Robinson</p>
                            <p class="text-muted mb-0 user-msg">
                                <small>Wow ! this admin looks good and awesome design</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-warning">
                                <i class="mdi mdi-account-plus"></i>
                            </div>
                            <p class="notify-details">
                                New user registered.
                                <small class="text-muted">5 hours ago</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-info">
                                <i class="mdi mdi-comment-account-outline"></i>
                            </div>
                            <p class="notify-details">
                                Caleb Flakelar commented on Admin
                                <small
                                    class="text-muted"
                                >4 days ago</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-secondary">
                                <i class="mdi mdi-heart"></i>
                            </div>
                            <p class="notify-details">
                                Carlos Crouch liked
                                <b>Admin</b>
                                <small class="text-muted">13 days ago</small>
                            </p>
                        </a>
                    </div>

                    <!-- All-->
                    <a
                        href="javascript:void(0);"
                        class="dropdown-item text-center text-primary notify-item notify-all"
                    >
                        View all
                        <i class="fi-arrow-right"></i>
                    </a>
                </div>
            </li>

            <li class="dropdown notification-list">
                <a
                    class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                >
                    <img
                        src="/images/user-1.jpg"
                        alt="user-image"
                        class="rounded-circle"
                    />
                    <span class="pro-user-name ml-1">
                        Geneva
                        <!-- <i class="mdi mdi-chevron-down"></i> -->
                    </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                    <!-- item-->
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-user"></i>
                        <span>My Account</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-settings"></i>
                        <span>Settings</span>
                    </a>

                    <!-- item-->
                    <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-lock"></i>
                        <span>Lock Screen</span>
                    </a> -->

                    <div class="dropdown-divider"></div>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-log-out"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </li>

            <li class="dropdown notification-list">
                <a
                    href="javascript:void(0);"
                    class="nav-link right-bar-toggle waves-effect waves-light"
                >
                    <i class="fe-settings noti-icon"></i>
                </a>
            </li>
        </ul>

        <!-- LOGO -->
        <div class="logo-box">
            <a href="index.html" class="logo text-center">
                <span class="logo-lg">
                    <img src="/images/logo.png" alt height="48" />
                    <!-- <span class="logo-lg-text-light">UBold</span> -->
                </span>
                <span class="logo-sm">
                    <!-- <span class="logo-sm-text-dark">U</span> -->
                    <img src="/images/logo.png" alt height="24" />
                </span>
            </a>
        </div>

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
                <button class="button-menu-mobile waves-effect waves-light">
                    <i class="fe-menu"></i>
                </button>
            </li>    
        </ul>
    </div>
    <!-- end Topbar -->
</template>

<style lang="scss" scoped>
//
// topbar.scss
//

// Logo
.logo {
    display: block;
    line-height: $topbar-height;
    span.logo-lg {
        display: block;
    }
    span.logo-sm {
        display: none;
    }
    .logo-lg-text-dark {
        color: $dark;
        font-weight: $font-weight-bold;
        font-size: 22px;
        text-transform: uppercase;
    }
    .logo-lg-text-light {
        color: $white;
        font-weight: $font-weight-bold;
        font-size: 22px;
        text-transform: uppercase;
    }
}

.logo-box {
    height: $topbar-height;
    width: $leftbar-width;
    float: left;
}

.navbar-custom {
    background-color: $bg-topbar-dark;
    box-shadow: $shadow;
    padding: 0 10px 0 0;
    position: fixed;
    left: 0;
    right: 0;
    height: $topbar-height;
    z-index: 100;

    .topnav-menu {
        > li {
            float: left;
        }
        .nav-link {
            padding: 0 15px;
            color: rgba($white, 0.6);
            min-width: 32px;
            display: block;
            line-height: $topbar-height;
            text-align: center;
            max-height: $topbar-height;
        }
    }
    .dropdown.show {
        .nav-link {
            background-color: rgba($white, 0.05);
        }
    }

    /* Search */
    .app-search {
        overflow: hidden;
        height: $topbar-height;
        display: table;
        max-width: 180px;
        margin-right: 20px;

        .app-search-box {
            display: table-cell;
            vertical-align: middle;

            input::-webkit-input-placeholder {
                font-size: 0.8125rem;
                color: rgba($white, 0.3);
            }
        }
        .form-control {
            border: none;
            height: 38px;
            padding-left: 20px;
            padding-right: 0;
            color: $white;
            background-color: rgba($white, 0.07);
            box-shadow: none;
            border-radius: 30px 0 0 30px;
        }
        .input-group-append {
            margin-left: 0;
            z-index: 4;
        }

        .btn {
            background-color: rgba($white, 0.07);
            border-color: transparent;
            color: rgba($white, 0.3);
            border-radius: 0 30px 30px 0;
            box-shadow: none !important;
        }
    }

    .button-menu-mobile {
        border: none;
        color: $white;
        display: inline-block;
        height: $topbar-height;
        line-height: $topbar-height;
        width: 60px;
        background-color: transparent;
        font-size: 24px;
        cursor: pointer;
    }

    .button-menu-mobile.disable-btn {
        display: none;
    }
}

/* Notification */
.noti-scroll {
    max-height: 230px;
}

.notification-list {
    margin-left: 0;

    .noti-title {
        background-color: $white;
        padding: 15px 20px;
    }

    .noti-icon {
        font-size: 21px;
        vertical-align: middle;
    }

    .noti-icon-badge {
        display: inline-block;
        position: absolute;
        top: 16px;
        right: 10px;
    }

    .notify-item {
        padding: 12px 20px;

        .notify-icon {
            float: left;
            height: 36px;
            width: 36px;
            font-size: 18px;
            line-height: 36px;
            text-align: center;
            margin-right: 10px;
            border-radius: 50%;
            color: $white;
        }

        .notify-details {
            margin-bottom: 5px;
            overflow: hidden;
            margin-left: 45px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: $gray-800;

            b {
                font-weight: 500;
            }
            small {
                display: block;
            }
            span {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 13px;
            }
        }

        .user-msg {
            margin-left: 45px;
            white-space: normal;
            line-height: 16px;
        }
    }
    .profile-dropdown {
        .notify-item {
            padding: 7px 20px;
        }
    }
}

.profile-dropdown {
    width: 170px;
    i {
        vertical-align: middle;
        margin-right: 5px;
    }
}

.nav-user {
    padding: 0 12px !important;
    img {
        height: 32px;
        width: 32px;
    }
}

// Topbar light
.navbar-custom-light {
    background-color: $bg-topbar-light !important;

    .topnav-menu {
        .nav-link {
            color: $gray-700;
        }
    }
    .dropdown.show {
        .nav-link {
            background-color: rgba($dark, 0.03);
        }
    }

    .button-menu-mobile {
        color: $dark;
    }

    /* Search */
    .app-search {
        input::-webkit-input-placeholder {
            color: $gray-500 !important;
        }
        .form-control {
            color: $dark;
            background-color: $gray-100;
            border-color: $gray-100;
        }
        .btn {
            background-color: $gray-100;
            color: $gray-400;
        }
    }
}
</style>