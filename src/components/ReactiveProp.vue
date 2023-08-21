<template>
<div>{{ count }}</div>
<div class="btn btn-success" @click="increment">Click</div>
</template>

<!--composition Api 
<script setup>
import { ref } from "vue";
const count=ref(0)
function increment() {
    count.value++
}
</script>-->


<script>
// Optional Api 
export default {
    data(){
        return {count:0
        }
    },
    methods:{
   increment(){
    this.count++
   }
    }
}
</script>