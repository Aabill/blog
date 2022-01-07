<script setup lang="ts">

</script>

<template>
    <div v-for="(block, index) in blocks" :key="index" class="max-w-7xl m-auto">
        <div v-if="block.type == 'header'">
            <editor-header :level="block.data.level" :text="block.data.text" ></editor-header>
        </div>
        <div v-if="block.type == 'image'">
            <editor-image :caption="block.data.caption" :url="block.data.file.url"></editor-image>
        </div>
        <div v-if="block.type == 'paragraph'">
            <editor-paragraph :text="block.data.text"></editor-paragraph>
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
