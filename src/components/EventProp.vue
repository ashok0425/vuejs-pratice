<template>
    <h1>Lastest Count: {{ count }}</h1>
    <h1>Value should be increased on input Change: {{ inputFieldValue }}</h1>

<ChildEventProp @increase-one="increaseByone" @increased-value="IncreasedValue"/>
</template>

<!-- composition Api
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
-->

<!-- Optional Api-->
<script>
import ChildEventProp from './ChildEventProp.vue';
export default {
    data() {
    return {
        count : 0,
        inputFieldValue:0,
    }
},
methods: {
    increaseByone () {
            this.count++
        },
        IncreasedValue(value){
            console.log('ss')
       this.inputFieldValue=value
        }
    },
    components:{
        ChildEventProp
    }
}
</script>