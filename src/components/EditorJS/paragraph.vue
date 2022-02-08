<template>
    <p :class="['text-left text-sm md:text-lg', pClass]" v-html="text"></p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    props: ['text', 'pClass'],
    name: 'editorjs-paragraph'
})
</script>