<template>
    <div class="container1">
        <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
        ></ckeditor>
        <!-- <button v-on:click="emptyEditor()">Empty the editor</button> -->
        <hr>

    </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
    data() {
        return {
            editor: ClassicEditor,
            editorData: "<p>Content of the editor.</p>",
            editorConfig: {
                // toolbar: [ 'bold', 'italic', '|', 'link' ]
                ckfinder: {
                uploadUrl: 'http://192.168.0.17:8080/'
            }
            }
        };
    },
    methods: {
        emptyEditor() {
            this.editorData = "";
        }  
    }
};
</script>
