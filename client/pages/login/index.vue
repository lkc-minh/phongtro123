<script setup lang="ts">
useSeoMeta({
    title: "LKC - Đăng nhập",
});
</script>

<template>
    <!-- <Head>
        <Title>ROAST - Home</Title>
    </Head> -->
    <div
        class="px-[30px] pt-[30px] pb-[100px] w-[600px] mx-auto border-[1px] rounded-md bg-white"
    >
        <h1 class="text-[28px] font-bold mb-[15px]">Đăng nhập</h1>
        <form>
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
                class="bg-blue text-white w-full font-bold rounded-md py-3 mb-[30px]"
                type="submit"
            >
                Đăng nhập
            </button>
            <div class="flex items-center justify-between">
                <NuxtLink class="text-secondary hover:text-hover">
                    Bạn quên mật khẩu?
                </NuxtLink>
                <NuxtLink
                    to="/register"
                    class="text-secondary hover:text-hover"
                >
                    Tạo tài khoản mới
                </NuxtLink>
            </div>
        </form>
    </div>
</template>
