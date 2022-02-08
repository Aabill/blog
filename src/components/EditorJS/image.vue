<template>
    <div>
        <img @load="loading=false" :class="[imgClass]" :src="url" :alt="caption">
        <span v-if="loading" class="animate-spin h-5 w-5 mr-3"></span>
        <p :class="captionClass"><span :class="textClass" v-text="caption"></span></p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    props: ['caption', 'url', 'imgClass', 'captionClass', 'textClass'],
    name: 'editorjs-image',
    data() {
        return {
            loading: true
        }
    }
})
</script>


<style>

</style>