<template>
    <input type="text" v-model="question">
    <span>{{ answer }}</span>
</template>

<!-- composition APi
<script setup>
import {ref, watch } from "vue";
let question=ref('')
let answer=ref('')
watch(question,async function(newQuestion,oldQuestion){
    if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    }
    setTimeout(() => {
    answer.value = 'Great'
        
    }, 2000);
})

</script>
-->

//  Option APi

<script>
export default {
 data() {
    return {
        question: '',
        answer:''
    }
 },
 watch:{
    question(newQuestion){
    if (newQuestion.indexOf('?') > -1) {
    this.answer = 'Thinking...'
    }
    setTimeout(() => {
    this.answer = 'Great'
        
    }, 2000);
 }
}
}

</script>
