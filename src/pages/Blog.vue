<script setup lang="ts">

</script>

<template>
<div  class="max-w-7xl m-auto px-4 py-2 md:px-8 md:py-5">
    <div v-for="(block, index) in blocks" :key="index" >
        <div v-if="block.type == 'header'" class="mb-3 mt-3">
            <editor-header :level="block.data.level" :text="block.data.text" :pClass="'mb-2'"></editor-header>
            <hr>
        </div>
        
        <div v-if="block.type == 'image'">
            <editor-image :caption="block.data.caption" :url="block.data.file.url" 
            :captionClass="'text-sm md:text-lg transform -translate-y-7 translate-x-3 md:-translate-y-10 md:translate-x-5 bg-white bg-opacity-60 max-w-max px-2 italic rounded'"
            ></editor-image>
        </div>
        <div v-if="block.type == 'paragraph'">
            <editor-paragraph :text="block.data.text"></editor-paragraph>
        </div>
    </div>
</div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, onValue} from "firebase/database";
import firebaseConfig from "../../firebase.config.json";

import editorHeader from "../components/EditorJS/header.vue"
import editorImage from "../components/EditorJS/image.vue"
import editorParagraph from "../components/EditorJS/paragraph.vue"

const app = initializeApp(firebaseConfig)
interface editorBlock {
  default: {
      type: string,
      data: {
          level: number,
          text: string,
          caption: string,
          file: {
            url: string
          }
      }
  }
}

export default defineComponent({
    components: {
        editorHeader,
        editorImage,
        editorParagraph
    },
    data() {
        
        return {
            id: this.$route.params.id,
            blocks: {} as editorBlock,
            error: null,
            loading: false,
        }
    },
    created() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.loading = true
            const db = getDatabase(app)
            const blogRef = ref(db, `${this.$route.params.category}/${this.$route.params.id}`)
            onValue(blogRef, (snapshot) => {
                const data = snapshot.val()
                this.blocks = data.blocks
                this.loading = false
                console.log(this.blocks)
            })
        }
    }
})
</script>

<style scoped>

</style>
