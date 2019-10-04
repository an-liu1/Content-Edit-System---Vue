<template>
    <div id="wrapper">
        <div class="content-page">
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <form @submit.prevent="edit" enctype="multipart/form-data">
                                <div
                                    class="form-group mb-3"
                                    v-for="(item, index) in list"
                                    :key="index"
                                >
                                    <div v-for="(v,k) in item" :key="k">
                                        <label :for="k">{{k}}</label>
                                        <input type="text" class="form-control" v-model="item[k]" />
                                    </div>
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
            list: []
        };
    },
    methods: {
        edit() {
            var data = this.list[0];
            var dataForm = {};
            dataForm.itemId = this.$route.params.id;
            Object.keys(data).forEach(key => {
                // console.log(key,+'---'+ data[key])
                dataForm[key] = data[key];
            });
            console.log(dataForm);
            this.$http
                .put("http://159.89.121.159:3001/somo/content", dataForm)
                .then(res => {
                    const { status } = res;
                    if (status === 200) {
                        // this.getData();
                        Swal.fire({
                            title: "Good job!",
                            text: "You have successfully edit the content!",
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
                "http://159.89.121.159:3001/somo/contentByApp?appName=somoplay&page=0&size=1000"
            )
            .then(({ data }) => {
                var arr = [];
                data.data.map(a => {
                    if (a._id === this.$route.params.id) {
                        arr.push(a);
                    }
                });
                this.list = arr;
            });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
