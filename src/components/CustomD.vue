<template>
<input type="text" v-focus>
</template>
<!--Composition Api
<script setup>
// enables v-focus in templates
const vFocus = {
  mounted: (el) => el.focus()
}
</script>
-->

<!--Option  Api-->
<script>
// enables v-focus in templates
const focus = {
  mounted: (el) => el.focus()
}


export default {
  directives: {
    // enables v-focus in template
    focus
  }
}
</script>
