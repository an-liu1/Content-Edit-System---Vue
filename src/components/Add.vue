<template>
    <div id="wrapper">
        <div class="content-page">
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <form @submit.prevent="add" enctype="multipart/form-data">
                                <div
                                    class="form-group mb-3"
                                    v-for="(item,index) in list"
                                    :key="index"
                                >
                                    <label :for="index">{{index}}</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="dataForm[index]"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-primary waves-effect waves-light"
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
    data() {
        return {
            list: [],
            dataForm: {}
        };
    },
    methods: {
        add() {
            console.log(this.dataForm);
            this.$http
                .post("http://159.89.121.159:3001/somo/content", this.dataForm)
                .then(res => {
                    const { status } = res;
                    if (status === 200) {
                        Swal.fire({
                            title: "Good job!",
                            text: "You have successfully add new content!",
                            type: "success",
                            confirmButtonClass: "btn btn-confirm mt-2",
                            allowEnterKey: true
                        }).then(() => {
                            if (Swal.isVisible()) {
                                window.history.back();
                            }
                        });
                    }
                })
                .catch(err => {
                    Swal.fire({
                        type: "error",
                        title: "Something went wrong!",
                        text: err,
                        confirmButtonClass: "btn btn-confirm mt-2",
                        allowEnterKey: true
                    });
                });
        }
    },
    mounted() {
        this.$http
            .get(
                "http://159.89.121.159:3001/somo/contentBySection?sectionName=" +
                    this.$route.params.sectionName +
                    "&appName=" +
                    this.$route.params.appName +
                    "&pageName=" +
                    this.$route.params.pageName,
                this.dataForm
            )
            .then(({ data }) => {
                // console.log(data);
                this.list = data.data[1];

                for (const key in this.list) {
                    this.dataForm[key] = "";
                }

                this.dataForm.appName = this.list.appName;
                this.dataForm.pageName = this.list.pageName;
                this.dataForm.sectionName = this.list.sectionName;
                this.dataForm.positionName = this.list.positionName;
                this.dataForm.link = "/";

                console.log(this.dataForm);
            });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
