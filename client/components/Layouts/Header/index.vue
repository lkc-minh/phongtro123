<script setup lang="ts">
const navbarList: {
    title: string;
    url: string;
}[] = [
    { title: "Trang chủ", url: "/" },
    { title: "Cho thuê phòng trọ", url: "/cho-thue-phong-tro" },
    { title: "Cho thuê nhà", url: "/cho-thue-nha" },
    { title: "Cho thuê căn hộ", url: "/cho-thue-can-ho" },
    { title: "Cho thuê mặt bằng", url: "/cho-thue-mat-bang" },
    { title: "Tìm người ở ghép", url: "/tim-nguoi-o-ghep" },
    { title: "Blog", url: "/blog" },
    { title: "Hướng dẫn", url: "/huong-dan" },
    { title: "Nạp tiền", url: "/nap-tien" },
    { title: "Bảng giá", url: "/bang-gia" },
];
</script>

<template>
    <header class="text-primary text-sm sticky top-[-70px]">
        <section
            class="h-[70] mx-auto w-1100 flex items-center justify-between"
        >
            <NuxtLink to="/" class="block py-3 h-[50]">
                <img
                    src="/logo.svg"
                    alt="logo"
                    class="object-cover h-[44px] w-[240px]"
                />
            </NuxtLink>
            <div>
                <NuxtLink to="/" class="px-4 py-3 hover:underline">
                    <Icon
                        name="material-symbols:favorite-outline"
                        class="mr-[5px]"
                        size="18"
                    />
                    Yêu thích
                </NuxtLink>
                <NuxtLink to="/register" class="px-4 py-3 hover:underline">
                    <Icon
                        name="ic:baseline-person-add-alt"
                        class="mr-[5px]"
                        size="18"
                    />
                    Đăng ký
                </NuxtLink>
                <NuxtLink to="/login" class="px-4 py-3 hover:underline">
                    <Icon name="ri:login-box-line" class="mr-[5px]" size="18" />
                    Đăng nhập
                </NuxtLink>
                <NuxtLink
                    to="/"
                    class="px-2 py-3 hover:underline bg-secondary2 text-white rounded-md"
                >
                    Đăng tin mới
                    <Icon
                        name="material-symbols:add-circle-outline"
                        class="mr-[5px]"
                        size="18"
                    />
                </NuxtLink>
            </div>
        </section>

        <section
            class="bg-secondary h-[40px] Header_container sticky top-0"
            style="position: -webkit-sticky"
        >
            <div class="w-[1120px] mx-auto">
                <ul class="flex items-center text-white">
                    <li v-for="nav in navbarList" :key="nav.title">
                        <NuxtLink
                            class="leading-[40px] px-3 block hover:bg-secondary2 font-semibold"
                            :to="nav.url"
                        >
                            {{ nav.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </section>
    </header>
</template>

<style lang="scss">
body {
    overflow-x: hidden;
}
.Header_container {
    position: sticky !important;
    top: 0;
    z-index: 999;
    .router-link-exact-active {
        background-color: #f73859;
        line-height: 40px;
    }
}
</style>
