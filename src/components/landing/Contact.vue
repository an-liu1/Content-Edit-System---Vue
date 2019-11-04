<template>
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
</template>

<style>
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

</style>