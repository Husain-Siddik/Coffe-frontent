<template>
    <div class=" flex items-center justify-center bg-[url('../assets/images/more/1.png')] mt-14 z-20 pb-6">
        <div class="container flex flex-col items-center justify-center pt-14 pb-6 ">
            <h2 class="text-xl font-ralway pb-4">--- Sip & Savor ---</h2>
            <p class="font-MyFont text-6xl font-extrabold pb-3 text-center text-[#331A15]">Our Popular Products</p>

            <div class="bg-[#E3B577] border-2 p-3 text-center flex items-center justify-center gap-4 rounded-lg mt-5">
                <button class="font-MyFont text-2xl text-white"> Add Coffee <span>

                    </span></button>
                <p class="text-2xl">
                    <CoCoffee />
                </p>

            </div>
        </div>
        <!-- <img src="../assets/images/more/1.png" alt="" srcset=""> -->
    </div>

    <!-- coffe cards -->
    <div class="bg-[url('../assets/images/more/5.png')] bg-right bg-no-repeat  pb-5 ">
        <div class="  flex items-center justify-center z-0">
            <div class=" container  grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 justify-center items-center">

                <div class=" p-3 md:p-0">

                    <div class="card card-side bg-[#F5F4F1]  ">
                        <figure class="p-5">
                            <img src="../assets/images/1.png" alt="Cofee imgre" />
                        </figure>
                        <div class="card-body text-xl font-ralway  justify-center">
                            <h1> <span class="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1> <span class="font-semibold">Chef:</span> Mr.Raju </h1>
                            <h1 class="pb-4"> <span class="font-semibold">Price:</span> 500 <span>TK</span> </h1>
                            <button class=" border  rounded-lg p-2 hover:bg-gray-300"> View Details</button>
                        </div>

                    </div>
                </div>
                <div class=" p-3 md:p-0 ">

                    <div class="card card-side bg-[#F5F4F1]  ">
                        <figure class="p-5">
                            <img src="../assets/images/1.png" alt="Cofee imgre" />
                        </figure>
                        <div class="card-body text-xl font-ralway  justify-center">
                            <h1> <span class="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1> <span class="font-semibold">Chef:</span> Mr.Raju </h1>
                            <h1 class="pb-4"> <span class="font-semibold">Price:</span> 500 <span>TK</span> </h1>
                            <button class=" border  rounded-lg p-2 hover:bg-gray-300"> View Details</button>
                        </div>

                    </div>
                </div>
                <div class=" p-3 md:p-0">

                    <div class="card card-side bg-[#F5F4F1] ">
                        <figure class="p-5">
                            <img src="../assets/images/1.png" alt="Cofee imgre" />
                        </figure>
                        <div class="card-body text-xl font-ralway  justify-center">
                            <h1> <span class="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1> <span class="font-semibold">Chef:</span> Mr.Raju </h1>
                            <h1 class="pb-4"> <span class="font-semibold">Price:</span> 500 <span>TK</span> </h1>
                            <button class=" border  rounded-lg p-2 hover:bg-gray-300"> View Details</button>
                        </div>

                    </div>
                </div>
                <div class=" p-3 md:p-0">

                    <div class="card card-side bg-[#F5F4F1] ">
                        <figure class="p-5">
                            <img src="../assets/images/1.png" alt="Cofee imgre" />
                        </figure>
                        <div class="card-body text-xl font-ralway  justify-center">
                            <h1> <span class="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1> <span class="font-semibold">Chef:</span> Mr.Raju </h1>
                            <h1 class="pb-4"> <span class="font-semibold">Price:</span> 500 <span>TK</span> </h1>
                            <button class=" border  rounded-lg p-2 hover:bg-gray-300"> View Details</button>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    </div>

</template>

<script setup>
import { CoCoffee } from '@kalimahapps/vue-icons';

</script>

<style lang="scss" scoped></style>