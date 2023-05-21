<script setup>
import SideBar from './SideBar.vue';

</script>

<template>
    <main>
        <!-- the header icons -->
        <div class="
        w-full
        pl-32
        pt-2
        border-b
        border-gray-300
        shadow-sm
        ">
            <!-- the middle one -->
            <div class="
            w-1/2
            flex
            justify-between
            ">
                <!-- the navigations -->
                <nav>
                    <ul class="flex h-full gap-5 text-gray-600  font-light">
                        <li>
                            <a href="#" class="pb-3 border-b-2 border-blue-700 flex gap-1 items-center text-blue-700"><i class="fa-solid fa-search"></i>All</a>
                        </li>
                        <li>
                            <a href="#" class="pb-3 border-b-2 flex gap-1 items-center"><i class="fa-solid fa-image"></i>Images</a>
                        </li>
                        <li>
                            <a href="#" class="pb-3 border-b-2 flex gap-1 items-center"><i class="fa-solid fa-location-dot"></i>Maps</a>
                        </li>
                        <li>
                            <a href="#" class="pb-3 border-b-2 flex gap-1 items-center"><i class="fa-solid fa-video"></i>Videos</a>
                        </li>
                        <li>
                            <a href="#" class="pb-3 border-b-2 flex gap-1 items-center"><i class="fa-solid fa-ellipsis-v"></i>More</a>
                        </li>
                    </ul>
                </nav>
                <!-- the tool -->
                <button class="font-gray-500 font-light">Tools</button>
            </div>
        </div>

        <!-- the main container -->
        <div class="px-32 w-full min-h-screen grid md:grid-cols-2 gap-5">
            <!-- the most left -->
            <div>
                <!-- the one -->
                <div class="mt-0 pt-1 text-lg text-gray-500 mb-7 ">
                    <p>About 3,900 result(0.4 sec).</p>
                </div>

                <!-- the two -->
                <div>
                    <div class=" text-sm flex gap-2 items-center text-gray-500">
                        <a href="#">https://bahirdar.com>wiki>Bahir>dar</a>
                        <i class="fa-solid fa-ellipsis-v font-bold"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-blue-700 capitalize">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        <article class="text-sm text-gray-600">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, incidunt repellat commodi dolorum doloribus minima!</p>
                        </article>
                        <div class="w-full flex justify-between items-center my-1 text-sm text-gray-500">
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem, ipsum dolor. <a href="#" class="text-blue-500 font-bold">lorem</a></p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem, ipsum dolor. <a href="#" class="text-blue-500 font-bold">lorem</a></p>
                            </div>
                        </div>
                        <div>
                            <p class="text-blue-700 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>

                </div>
                
                <!-- the three -->
                <div>
                    <!-- the title -->
                    <div class="w-full flex gap-2 items-center border-b mt-3 text-1xl">
                        <div>Lorem ipsum dolor sit amet.</div><i class="fa-solid fa-ellipsis-v"></i>
                    </div>
                    <!-- the drop downs -->
                    <div class="w-full flex flex-col items-center text-lg text-gray-700">
                        <div class="w-full border-b flex justify-between pr-3 pt-2 cursor-pointer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                            <i class="fa-solid fa-sort-down"></i>
                        </div>
                        <div class="w-full border-b flex justify-between pr-3 pt-2 cursor-pointer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                            <i class="fa-solid fa-sort-down"></i>
                        </div>
                        <div class="w-full border-b flex justify-between pr-3 pt-2 cursor-pointer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                            <i class="fa-solid fa-sort-down"></i>
                        </div>
                        <div class="w-full border-b flex justify-between pr-3 pt-2 cursor-pointer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing?</p>
                            <i class="fa-solid fa-sort-down"></i>
                        </div>
                    </div>
                </div>

                <!-- the foure -->
                <div class="relative mt-5">
                    <!-- the title -->
                    <div>
                        <h4 class="font-Roboto text-2xl font-bold flex gap-2 "> <i clas="fa-solid fa-image"></i> Lorem, ipsum dolor.</h4>
                    </div>
                    <!-- the tags -->
                    <div class="flex items-center justify-center gap-2 px-3 py-2">
                        <div class="flex gap-1 items-center justify-center border rounded-full h-fit px-1 py-1 cursor-pointer">
                            <!-- the image -->
                            <div class=" w-15 h-15 rounded-full overflow-hidden">
                                <img src="../assets/image/1.jpg" class="w-full h-full object-cover" alt="">
                            </div>
                            <!-- the text -->
                            <div class="text-xs font-light mr-2">
                                lorem ipsum
                            </div>
                        </div>
                        <div class="flex gap-1 items-center justify-center border rounded-full h-fit px-1 py-1 cursor-pointer">
                            <!-- the image -->
                            <div class=" w-15 h-15 rounded-full overflow-hidden">
                                <img src="../assets/image/2.jpg" class="w-full h-full object-cover" alt="">
                            </div>
                            <!-- the text -->
                            <div class="text-xs font-light mr-2">
                                Lorem, ipsum.
                            </div>
                        </div>
                        <div class="flex gap-1 items-center justify-center border rounded-full h-fit px-1 py-1 cursor-pointer">
                            <!-- the image -->
                            <div class=" w-15 h-15 flex items-center justify-center rounded-full overflow-hidden">
                                <img src="../assets/image/3.jpg" class="w-15 h-15 object-cover" alt="">
                            </div>
                            <!-- the text -->
                            <div class="text-xs font-light mr-2">
                                Lorem, ipsum dolor.
                            </div>
                        </div>
                        <div class="flex gap-1 items-center justify-center border rounded-full h-fit px-1 py-1 cursor-pointer">
                            <div class=" w-15 h-15 rounded-full overflow-hidden">
                                <img src="../assets/image/4.jpg" class="w-full h-full object-cover" alt="">
                            </div>
                            <div class="text-xs font-light mr-2">
                                Lorem, ipsum.
                            </div>
                        </div>
                    </div>

                    <!-- the image container -->
                    <div class="relative pb-8 border-b">
                        <!-- the image grid -->
                        <div class="grid grid-cols-4 gap-1 rounded-lg overflow-hidden ">
                            <div>
                                <img src="../assets/image/background.jpg" alt="">
                            </div>
                            <div>
                                <img src="../assets/image/background2.jpg" alt="">
                            </div>
                            <div>
                                <img src="../assets/image/3.jpg" alt="">
                            </div>
                            <div>
                                <img src="../assets/image/2.jpg" alt="">
                            </div>
                        </div>
                        <!-- the button -->
                        <div class="absolute -bottom-5 cursor-pointer left-44 flex w-32 items-center justify-center border bg-white rounded-full py-2">
                            <div class="absolute left-1">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div class="text-blue-700">
                                View all
                            </div>
                        </div>
                    </div>
                </div>

                <!-- the five -->
                <div>

                </div>
            </div>
            <div class="flex flex-col gap-5 mt-10 p-3 border rounded-lg ml-5">
                <SideBar/>
            </div>
        </div>

        <!-- the side bar -->
        
    </main>
</template>