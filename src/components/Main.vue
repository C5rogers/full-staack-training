<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useData } from '../composable/useData';
import { onMounted } from 'vue';

const {countryList,getAllCountryList}=useData()


onMounted(() => {
    getAllCountryList()
    console.log(countryList)
})

const form=ref('')

const router=useRouter()
const props=defineProps({
    toogleImage:Boolean
})


const goToResult=()=>{
    router.push({
        name:"Search",
        params:{query:form.value ? form.value : 'searchEngine'}
    })
}


const value=ref('')
const vFocus={
    mounted:(el)=>el.focus()
}

</script>

<template>

    <main class="
    w-full
    min-h-screen
    flex
    items-center
    justify-center
    ">
        <div class="
        flex
        flex-col
        items-center
        justify-center
        ">
            <!-- the google icons -->
            <div v-if="toogleImage">  
                <img src="../assets/image/the google icon.png" class="w-32" alt="">
            </div>
            <!-- the search engine -->
                <div class="
                relative
                w-96
                -mt-5
                ">
                    <div class="
                    absolute 
                    top-2.5
                    left-3
                    " @click="goToResult">
                        <i class="fa-solid fa-search text-gray-500"></i>
                    </div>
                    <button class="absolute top-1.5 cursor-pointer right-3" @click="goToResult">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/></svg>
                    </button>
                    <input type="text" v-focus placeholder="Search Any Thing" class="
                    px-10
                    py-2
                    border
                    rounded-full
                    w-full
                    outline-none
                    border-gray-500
                    hover:bg-gray-100
                    focus:bg-gray-100
                    transition
                    duration-300
                    " v-model="form" >
                </div>

                <!-- the button fild -->
            <div class="
            flex
            gap-10
            mt-5
            ">
                <button class="
                py-2
                px-4
                bg-gray-200
                rounded-full
                capitalize
                text-sm
                hover:shadow-inner
                ">
                    Search Every Thing.
                </button>
                <button class="
                py-2
                px-4
                bg-gray-200
                rounded-full
                capitalize
                text-sm
                hover:shadow-inner
                ">
                    Start
                </button>
            </div>
            <article class="mt-3 text-sm font-Roboto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </article>
        </div>
    </main>

    
</template>