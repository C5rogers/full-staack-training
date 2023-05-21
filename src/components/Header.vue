<script setup>
import { ref } from 'vue';

const showImage=ref(true)
const emit=defineEmits(['toogle-image'])

const emitingFunction=()=>{
    showImage.value=!showImage.value
    emit('toogle-image',{result:showImage.value})
}

</script>

<template>
    <header class="
    w-full
    flex
    items-end 
    bg-gray-100
    px-5
    py-2
    sticky
    top-0
    left-0
    right-0
    ">
        <div class="
        ml-auto
        flex
        gap-4
        items-center
        justify-center
        ">
            <div class="">
                <router-link :to="{name:'Search'}"><i class="fa-solid fa-arrow-right"></i></router-link>
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
                <button class="text-gray-600" @click="emitingFunction">
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
