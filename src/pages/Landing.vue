<script setup lang="ts">

</script>

<template>
    <div class="max-w-7xl p-2.5 m-auto">
        <div class="px-2 py-3">
            <input type="text" placeholder="Search" class="rounded-lg h-10 px-4 py-3 w-full max-w-md text-lg border border-solid border-gray-300">
        </div>
        <div class="px-2 py-3 my-1">
            <h1 class="text-xl font-bold">Latest Blog</h1>
            <div v-for="(blog, key, index) in blogs" :key="index">
                <div v-if="index == Object.keys(blogs).length - 1">
                    <div class="mx-3 " v-for="(block, index) in blog.blocks" :key="index">
                        <h1 class="my-3 text-lg" v-if="block.type == 'header'" v-html="block.data.text"></h1>
                        <div class="md:max-w-lg">
                            <div v-if="block.type == 'image'">
                                <editor-image class="md:max-w-lg" :captionClass="'italic mt-2 transform -translate-y-10 z-10 text-white text-right pr-3'" :imgClass="'md:max-w-lg'" :caption="block.data.caption" :url="block.data.file.url"></editor-image>
                            </div>
                            <div v-if="block.type == 'paragraph'">
                                <editor-paragraph class="transform -translate-y-40 text-gray-200 px-5" :pClass="'excerpt'" :text="block.data.text"></editor-paragraph>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <h1 class="text-xl font-bold">Latest Nashville Number System</h1>
            <div v-for="(blog, keyBlog, index) in nns" :key="index">
                <div v-if="index == Object.keys(nns).length - 1">
                    <div class="mx-3 " v-for="(block,key, index) in blog.blocks" :key="index">
                        <div class="my-3 text-lg" v-if="block.type == 'header'">
                            <a class="text-blue-700 underline" :href="`/read/nns/${keyBlog}`" v-html="block.data.text"></a>
                        </div>
                        <!-- <div class="md:max-w-lg">
                            <div v-if="block.type == 'paragraph'">
                                <editor-paragraph class="px-5" :pClass="''" :text="block.data.text"></editor-paragraph>
                            </div>
                        </div> -->
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.excerpt {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>


<script lang="ts">

import { defineComponent, ref as Vref, computed, onMounted } from 'vue'
import { initializeApp } from 'firebase/app'
import firebaseConfig from "../../firebase.config.json";
import { getDatabase, ref, child, get, limitToLast, query } from 'firebase/database'

import editorImage from "../components/EditorJS/image.vue"
import editorParagraph from "../components/EditorJS/paragraph.vue"


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

interface blogs {
        default: {
            blocks: editorBlock
        }
}
export default defineComponent({
    components: {
        editorImage,
        editorParagraph
    },
    data() {
        return {
            blogs: {} as blogs,
            nns: {} as blogs,
        }
    },

    mounted() {
        
        const Blogs = this.getPosts('blogs')
        Blogs.then( (res) => {
            this.blogs = res;
        })
        const NNS = this.getPosts('nns');
        NNS.then( (res) => {
            this.nns = res;
            console.log(res)
        })

        
        
    },
    methods: {
        async  getPosts( refDB: string ) : Promise<blogs> {
            const app = initializeApp(firebaseConfig)
            const dbRef = ref(getDatabase(app));
            const recentPosts = query(child(dbRef, `${refDB}`), limitToLast(5));
            const wew = await get(recentPosts).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val()
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
                console.log(error)
                
            });
            return wew;
        }
    }
    
})
</script>

<style scoped>

</style>
