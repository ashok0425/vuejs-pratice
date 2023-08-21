<template>
        <input type="text" ref="name">
</template>
<!-- compostion Api
<script setup>
import { onMounted, ref } from 'vue';
const name = ref(null)

onMounted(() => {
    console.log(name)
//   name.value.focus()
})
</script>
-->


<!-- Option Api -->
<script>

export default {
    mounted(){
        this.$refs['name'].focus();
    }
}
</script>