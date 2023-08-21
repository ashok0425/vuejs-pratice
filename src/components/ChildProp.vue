<template>
    <h1>Is Published: {{ isPublished }}</h1>
</template>

<!--composition APi
<script setup>
import { computed, defineProps } from 'vue';
let props=defineProps(['title','isPublished'])
let isPublished=computed(()=>props.isPublished?props.title:'Unpusblished')
</script>

-->

<script>
export default {
    props:['isPublished','title'],
    computed:{
        isPublished(){
            return this.isPublished?this.title:'Unpusblished'
        }
    }
}
</script>