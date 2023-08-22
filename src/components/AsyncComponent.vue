<template>
   <AsyncChild/>
</template>

<script setup>
import { defineAsyncComponent } from "vue"
// import ChildPropVue from "./ChildProp.vue"

let ComponentRender=defineAsyncComponent(()=>{
     import("./AsyncChild.vue")
})
console.log(ComponentRender)
</script>