<template>
<h2>Show Bth:{{ ShowBtn }}</h2>
<button class="btn btn-danger" @click="removeArray">Remove Array</button>

</template>

<!-- composition Api 
<script setup>
import { computed, ref, } from 'vue';
const Arr=ref([1,2,3,4]);
let ShowBtn=computed(()=>Arr.value.length==4?'Yes':'No')

//making allray leng 0
function removeArray(){
    Arr.value.push(3)
}
</script>
-->

//  Optional Api 
<script>
export default {
    data(){
        return{
            Arr:[1,2,3,4]
        }
    },
    computed:{
        ShowBtn(){
          return this.Arr.length==4?'Yes':'No'
        }
    },
    methods:{
        removeArray(){
   this.Arr.push(3)
}
    }
}
</script>
