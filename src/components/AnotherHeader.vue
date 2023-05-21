<script setup>

</script>

<template>
    <header class="
    w-full
    flex
    justify-between
    px-5
    py-2
    bg-gray-100
    sticky
    top-0
    left-0
    right-0
    ">
        <!-- the search engine -->
        <div class="
        flex
        gap-10
        items-center
        w-1/2
        ">
            <!-- the google icon -->
            <div class="
            w-20
            h-10
            ">
                <img src="../assets/image/the google icon.png" class="w-full h-full object-cover" alt="">
            </div>
            <!-- the search engine -->
            <div class="
            relative
            flex
            w-full
            ">
                <input type="text" value="Bahir dar"
                class="w-full rounded-full rounded-r-none outline-none px-5 py-2 focus:bg-gray-200 hover:bg-gray-200 transition duration-200"
                >
                <!-- the absolute button -->
                <button class="absolute right-20 -top-2 text-5xl font-light ">&times;</button>
                <button class=" w-20 rounded-r-full bg-gray-300"><i class="fa-solid fa-search"></i></button>
            </div>
        </div>

        <!-- the another icons -->
        <div class="
        flex
        gap-4
        items-center
        justify-center
        ">
            <div class="">
                <router-link :to="{name:'home'}"><i class="fa-solid fa-arrow-left"></i></router-link>
            </div>
            <div class="
            font-bold
            text-gray-600
            text-xs
            ">
                <a href="#">Image</a>
            </div>
            <div class="
            font-bold
            text-gray-600
            text-xs
            ">
                <a href="#">Gmail</a>
            </div>
            <div>
                <button class="text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h2v2H4V4Zm0 14h2v2H4v-2ZM18 4h2v2h-2V4Zm0 7h2v2h-2v-2Zm-7 0h2v2h-2v-2Zm-7 0h2v2H4v-2Zm7-7h2v2h-2V4Zm0 14h2v2h-2v-2Zm7 0h2v2h-2v-2Z"/></svg>
                </button>
            </div>
            <div>
                <button class="
                py-1
                px-4
                bg-blue-500
                text-white
                font-bold
                shadow-lg
                rounded-sm
                flex
                items-center
                justify-center
                text-xs
                ">
                    Signup
                </button>
            </div>
        </div>
    </header>
</template>