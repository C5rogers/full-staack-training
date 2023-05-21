<script setup>
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue';

const toogleImageVariable=ref(true)


const toogleIamge=(value)=>{
  toogleImageVariable.value=value.result
}

</script>

<template>
  <Header @toogle-image="toogleIamge" />
  <Main :toogleImage="toogleImageVariable" />
  <Footer />
</template>