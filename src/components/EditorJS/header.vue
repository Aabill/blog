<template>
    <p :class="[{ 'text-2xl md:text-4xl': level == 1, 'text-1xl md:text-3xl ': level == 2, 'text-lg md:text-2xl': level == 3, 'text-1xl': level == 4, 'text-xl': level == 5, 'text-lg': level == 6 }, 'font-bold', pClass]" >
        <span v-html="text" :class="textClass"></span>
    </p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    props: ['level', 'text', 'textClass', 'pClass'],
    name: 'editorjs-header'
})
</script>