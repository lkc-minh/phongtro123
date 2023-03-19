<script setup lang="ts">
useSeoMeta({
    title: "LKC - Đăng ký",
});
</script>

<template>
    <div
        class="px-[30px] pt-[30px] pb-[100px] w-[600px] mx-auto border-[1px] rounded-md bg-white"
    >
        <h1 class="text-[28px] font-bold mb-[15px]">Tạo mới tài khoản</h1>
        <form>
            <div class="mb-5">
                <label for="fullName" class="block"> HỌ TÊN </label>
                <input
                    id="fullName"
                    type="text"
                    class="outline-none w-full h-[45px] p-3 rounded-md bg-gray"
                />
            </div>
            <div class="mb-5">
                <label for="phone" class="block"> SỐ ĐIỆN THOẠI </label>
                <input
                    id="phone"
                    type="text"
                    class="outline-none w-full h-[45px] p-3 rounded-md bg-gray"
                />
            </div>
            <div class="mb-5">
                <label for="password" class="block"> TẠO MẬT KHẨU </label>
                <input
                    id="password"
                    type="password"
                    class="outline-none w-full h-[45px] p-3 rounded-md bg-gray"
                />
            </div>
            <button
                class="bg-blue text-white w-full rounded-md py-3 mb-[30px] font-bold"
                type="submit"
            >
                Tạo tài khoản
            </button>
            <p class="my-4">
                Bấm vào nút đăng ký tức là bạn đã đồng ý với
                <NuxtLink class="text-secondary hover:text-hover"
                    >quy định sử dụng</NuxtLink
                >
                của chúng tôi
            </p>
            <p class="my-4">
                Bạn đã có tài khoản?
                <NuxtLink class="text-secondary hover:text-hover" to="/login"
                    >Đăng nhập ngay</NuxtLink
                >
            </p>
        </form>
    </div>
</template>
