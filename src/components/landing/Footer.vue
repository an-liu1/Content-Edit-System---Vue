<template>
    <footer class="bg-dark footer">
        <div class="float-left pull-none" v-for="(item, index) in footer" :key="index">
            <p class="text-white-50">{{item.nameEn}}</p>
        </div>
    </footer>
</template>

<style >
/*******************
    11.footer
********************/
.footer {
    height: 50px;
}
.footer p {
    line-height: 50px;
}

</style>

<script>
import { getData, getImg } from "@/api/somoplay";
export default {
    data() {
        return {
            footer: {}
        };
    },
    methods: {
        async getFooter() {
            let res = await getData(
                "?appName=somoplay&pageName=all&sectionName=footer"
            );
            this.footer = res.data;
        }
    },

    created() {
        this.getFooter();
    },
    computed: {
        imgs: function() {
            return function(item) {
                return getImg(item.mainImageType + "/" + item.mainImage);
            };
        }
    }
};
</script>