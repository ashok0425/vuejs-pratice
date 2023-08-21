<template>
    <h1>prop</h1>
    <ChildProp title="Yes" :isPublished="isPublished"/>
    <button class="btn btn-success" @click="Publish">Click to publish</button>
</template>

<!-- composition APi
<script setup>
import { ref } from 'vue';
import ChildProp from './ChildProp.vue';
let isPublished=ref(false);

function Publish(){
    isPublished.value=true;
}

</script>

-->

<!-- Optional Api-->
<script>
import  ChildProp  from "./ChildProp.vue";
export default {
    data() {
        return {
            isPublished: false,
        }
    },
    components: {
        ChildProp,
    },
    methods:{
        Publish () {
            this.isPublished=true
    }
}
}
</script>
