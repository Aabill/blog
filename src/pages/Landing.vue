<script setup lang="ts">

</script>

<template>
    <div class="max-w-7xl p-2.5 m-auto">
        <div class="px-2 py-3">
            <input type="text" placeholder="Search" class="rounded-lg h-10 px-4 py-3 w-full max-w-md text-lg border border-solid border-gray-300">
        </div>
        <div class="px-2 py-3 my-1">
            <h1 class="text-xl font-bold">Latest Blog</h1>
            <div v-for="(blog, index) in blogs" :key="index">
                <div :class="['mx-3 blocks', block.type ]" v-for="(block, key, index) in blog[Object.keys(blog)[0]].blocks" :key="index">
                    
                    <h1 class="my-3 text-lg" v-if="block.type == 'header'"> <a :href="`/read/blogs/${Object.keys(blog)[0]}`"><span class="hover:underline" v-html="block.data.text"></span></a></h1>
                    
                    <div class="md:max-w-lg relative">
                        <div v-if="block.type == 'image'">
                            <a :href="`/read/blogs/${Object.keys(blog)[0]}`">
                                <editor-image class="md:max-w-lg" :textClass="'bg-black bg-opacity-40 px-1 rounded'" :captionClass="'italic mt-2 transform -translate-y-10 z-10 text-white text-right pr-3 text-shadow'" :imgClass="'md:max-w-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all'" :caption="block.data.caption" :url="block.data.file.url"></editor-image>
                            </a>
                        </div>
                        <div v-if="block.type == 'paragraph'" >
                            <editor-paragraph class="absolute bottom-20 text-white px-5" :pClass="'excerpt text-shadow pointer-events-none'" :text="block.data.text"></editor-paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="md:max-w-lg">
            <h1 class="mt-10 text-xl font-bold">Latest Nashville Number System</h1>
            <div v-for="(blog, keyBlog, index) in nns" :key="index">
                <div class="mx-3 " v-for="(block,key, index) in blog[Object.keys(blog)[0]].blocks" :key="index">
                    <div class="my-3 text-lg" v-if="block.type == 'header'">
                        <a class="text-blue-700 underline" :href="`/read/nns/${Object.keys(blog)[0]}`" v-html="block.data.text"></a>
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
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.text-shadow {
    text-shadow: 0px 1px 3px black;
}

.blocks.paragraph ~ .blocks.paragraph{
    display: none;
}
.blocks.paragraph {
    display: block;
}

</style>


<script lang="ts">

import { defineComponent, ref as Vref, computed, onMounted } from 'vue'
import { initializeApp } from 'firebase/app'
import firebaseConfig from "../../firebase.config.json";
import { getDatabase, ref, child, get, limitToLast, query, limitToFirst, orderByChild, orderByKey } from 'firebase/database'

import editorImage from "../components/EditorJS/image.vue"
import editorParagraph from "../components/EditorJS/paragraph.vue"


interface editorBlock {
    default:{
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

interface blog {
    [index:string]: {
        blocks: editorBlock,
    }
}
interface blogs extends Array<blog>{}

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
            let rev = this.dict_reverse(res)
            this.blogs = rev;
        })
        const NNS = this.getPosts('nns');
        NNS.then( (res) => {
            let rev = this.dict_reverse(res)
            this.nns = rev;
        })
        
        
    },
    methods: {
        async  getPosts( refDB: string ) : Promise<blogs> {
            const app = initializeApp(firebaseConfig)
            const dbRef = ref(getDatabase(app), `${refDB}`); 
            const recentPosts = query(dbRef, limitToLast(5));
            const wew = await get(recentPosts).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val())
                return snapshot.val()
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
                console.log(error)
            });
            return wew;
        },
        dict_reverse(obj: blogs) {
            let new_obj = {} as blogs;
            let rev_obj = Object.keys(obj).reverse();
            
            let wew : any = Object.keys(obj).map(function(key, index) {
                let wew : any = rev_obj[index];
                let what = {
                    [wew] : obj[wew]
                };
                return what;
            });
            new_obj = wew;
            return new_obj;
        }
    }
    
})
</script>

<style scoped>

</style>
