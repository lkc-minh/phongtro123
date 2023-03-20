<script setup lang="ts">
import { useToast } from "vue-toastification";

useSeoMeta({
    title: "Phongtro123.com - Kênh thông tin Phòng Trọ số 1 Việt Nam",
});
const toast = useToast();

onMounted(() => {
    toast.success("Hello world");
});
</script>

<template>
    <div class="h-[1000px]">
        <!-- <img src="/logo.svg" alt="" /> -->
        <h1 class="text-3xl bg-red-700 font-bold underline">Home page</h1>
    </div>
</template>
