<template>
    <div>
        <img :class="imgClass" :src="url" :alt="caption">
        <p :class="captionClass" v-text="caption"></p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    props: ['caption', 'url', 'imgClass', 'captionClass'],
    name: 'editorjs-image'
})
</script>


<style>

</style>