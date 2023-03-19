<template>
  <div>
    <img src="/logo.svg" alt="" />
    <h1 class="text-3xl bg-red-700 font-bold underline">Hello world!</h1>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";

const toast = useToast();

onMounted(() => {
  toast.success("Hello world");
});
</script>
