<template>
    <div>
    <button @click="$emit('increaseOne')" class="btn-success btn">Increase  by 1</button>
    <button @click="Increase" class="btn-danger btn">Increase  by 1</button>
</div>
<div>
<input type="number" name="" id="" v-model="number" @keyup="$emit('increasedValue',number)">
</div>
</template>
<!-- composition Api
<script setup>
import { ref } from "vue";

let emit=defineEmits(["increaseOne","increasedValue"])
function Increase(){
    emit('increaseOne')
}
let number = ref(0);
</script>
-->

<!-- Optional Api-->

<script>
export default {
    emits: ['increaseOne','increasedValue'],
    methods:{
        Increase(){
            this.$emit("increaseOne")
        }
    }
}
</script>