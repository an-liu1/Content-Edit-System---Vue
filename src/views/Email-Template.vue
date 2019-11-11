<template>
    <div class="container1">
        <ckeditor
            style="height: 920px; border: 1px solid #ccc;"
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
            @input="onEditorInput"
        ></ckeditor>
        <!-- <button v-on:click="emptyEditor()">Empty the editor</button> -->
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
            }
        };
    },
    methods: {
        emptyEditor() {
            this.editorData = "";
        },
        onEditorInput() {
            console.log(this.editorData);
        }
    }
};
</script>
