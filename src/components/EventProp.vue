<template>
    <h1>Lastest Count: {{ count }}</h1>
    <h1>Value should be increased on input Change: {{ inputFieldValue }}</h1>

<ChildEventProp @increase-one="increaseByone" @increased-value="IncreasedValue"/>
</template>

<script setup>
import { ref } from 'vue'

import ChildEventProp from './ChildEventProp.vue';
let count=ref(0)
let inputFieldValue=ref(0)

function increaseByone(){
count.value++
}

function IncreasedValue(value){
    // console.log(value)
    inputFieldValue.value=value
}
</script>