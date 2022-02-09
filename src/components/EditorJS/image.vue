<template>
    <div >
        <div v-show="!show" :class="['h-40 md:h-64 flex justify-center items-center', imgClass]">
            <img src="/loader.svg" class="h-10 w-10">
        </div>
        <div v-show="show">
            <img @load="show=true" :class="[imgClass]" :src="url" :alt="caption">
            
            <p :class="captionClass"><span :class="textClass" v-text="caption"></span></p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    props: ['caption', 'url', 'imgClass', 'captionClass', 'textClass'],
    name: 'editorjs-image',
    data() {
        return {
            loading: true,
            show: false
        }
    }
})
</script>


<style>

</style>