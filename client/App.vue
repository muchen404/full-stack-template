<script setup lang="ts">
import { ref } from "vue";
const message = ref(import.meta.env.VITE_APP_NAME)
const count = ref(0)

function clickHandler() {
  count.value ++
}
</script>

<template>
  <img src="/vite.svg" height="300" alt="">
  <h1 class="app-title">{{ message }}: {{ count }}</h1>
  <button @click="clickHandler">click to increase</button>
</template>