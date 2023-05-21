<script setup>

</script>

<template>
    <!-- the title -->
    <div class="font-bold text-2xl">
        About
    </div>
    <article class="text-sm font-light text-gray-800">
        <p>
            Bahir Dar is the capital city of the Amhara region in northern Ethiopia. It’s a port on the south shore of the huge inland Lake Tana. Dek Island is one of many islands in the lake that are home to medieval monasteries. On the Zege Peninsula, the Ura Kidane Mihret monastery is known for its elaborate, colorful murals. The Blue Nile River snakes southeast of the city toward the towering cliffs at the Blue Nile Falls. ― Google
        </p>
    </article>
    <!-- the litter informations -->
    <div class="flex flex-col gap-3">
        <div class="font-light text-gray-700 text-sm">
            <span class="font-bold text-gray-800 text-lg">Area</span>:46.33 mi²
        </div>
        <div class="font-light text-gray-700 text-sm">
            <span class="font-bold text-gray-800 text-lg">University</span>:Bahir Dar University peda campus
        </div>
        <div class="font-light text-gray-700 text-sm">
            <span class="font-bold text-gray-800">Weather</span>:82°F (28°C), Wind N at 6 mph (10 km/h), 28% 
        </div>
        <div class="font-light text-gray-700 text-sm">
            <span class="font-bold text-gray-800 text-lg">Humidity</span>:<a href="#">More on Weather.com</a>
        </div>
        <div class="font-light text-gray-700 text-sm">
            <span class="font-bold text-gray-800 text-lg">Elevation</span>:5,906′
        </div>
        <div class="font-light text-gray-700 text-sm">
            <span class="font-bold text-gray-800 text-lg">Area code</span>: (+251) 58
        </div>
        <div class="font-light text-gray-700 text-sm">
            <span class="font-bold text-gray-800 text-lg">Region</span>:<a href="#">Amhara</a>
        </div>
    </div>

    <!-- the dropdowns -->
    <div class="mt-5 border-t p-2">
        <div class="border-b flex justify-between items-center py-3 px-3 cursor-pointer">
            <!-- the most lef -->
            <div>   
                <div class="font-bold text-lg">Lorem, ipsum dolor.</div>
                <div class="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <div>
                <i class="fa-solid fa-sort-down"></i>
            </div>
        </div>
        <div class="border-b flex justify-between items-center py-3 px-3 cursor-pointer">
            <!-- the most lef -->
            <div>   
                <div class="font-bold text-lg">Lorem.</div>
                <div class="font-light text-sm">Lorem ipsum dolor sit amet.</div>
            </div>
            <div>
                <i class="fa-solid fa-sort-down"></i>
            </div>
        </div>
        <div class="border-b flex justify-between items-center py-3 px-3 cursor-pointer">
            <!-- the most lef -->
            <div>   
                <div class="font-bold text-lg">Lorem, ipsum.</div>
                <div class="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <div>
                <i class="fa-solid fa-sort-down"></i>
            </div>
        </div>
        <!-- the bottom one -->
        <div class="mt-4 border-b flex items-center">
            <div class="ml-auto  font-light text-sm text-gray-500">
                Feedback
            </div>
        </div>
    </div>

    <!-- the last btoom -->
    <div class="flex flex-col gap-3">
        <!-- the title -->
        <div class=" capitalize text-lg font-bold">Lorem, ipsum dolor.</div>
        <!-- the image grid -->
        <div class="grid grid-cols-4 gap-1 rounded-sm overflow-hidden">
            <div><img src="../assets/image/2.jpg" alt=""><div class="font-light text-sm text-gray-500 ">Lorem.</div></div>
            <div><img src="../assets/image/3.jpg" alt=""><div class="font-light text-sm text-gray-500 ">Lorem, ipsum.</div></div>
            <div><img src="../assets/image/4.jpg" alt=""><div class="font-light text-sm text-gray-500 ">Lorem, ipsum.</div></div>
            <div><img src="../assets/image/1.jpg" alt=""><div class="font-light text-sm text-gray-500 ">Lorem.</div></div>
        </div>
        
        <!-- the button -->
        <div class="w-full rounded-full bg-gray-200 flex justify-center items-center py-1 cursor-pointer">
            <div class="flex gap-2">
                <span>See more</span>
                <span><i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
    </div>

</template>