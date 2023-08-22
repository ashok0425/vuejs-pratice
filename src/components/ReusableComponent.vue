
<template>

    <h1>{{data && data[0]}}</h1>

</template>
<script setup>
import {ref} from "vue"
import {useFetch} from './ResuableChild';
let {data,error}=  useFetch('cities');
</script>