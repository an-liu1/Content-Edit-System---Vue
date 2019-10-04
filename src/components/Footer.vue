<template>
    <!-- Footer Start -->
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                2015 - 2019 &copy; UBold theme by <a href="">Coderthemes</a> 
            </div>
            <div class="col-md-6">
                <div class="text-md-right footer-links d-none d-sm-block">
                    <a href="javascript:void(0);">About Us</a>
                    <a href="javascript:void(0);">Help</a>
                    <a href="javascript:void(0);">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- end Footer -->
</template>

<style lang="scss" scoped>
    // 
// footer.scss
//

.footer {
    bottom: 0;
    padding: 19px 15px 20px;
    position: absolute;
    right: 0;
    color: $gray-600;
    left: $leftbar-width;
    background-color: darken($body-bg,2.5%);

    .footer-links {
        a {
            color: $gray-600;
            margin-left: 1.5rem;
            transition: all .4s;
            &:hover {
                color: $gray-900;
            }
            &:first-of-type {
                margin-left: 0;
            }
        }
    }
}

.footer-alt {
    left: 0 !important;
    text-align: center;
    background-color: transparent;
}

@include media-breakpoint-down(sm) {
    .footer {
        left: 0 !important;
        text-align: center;
    }
}
</style>