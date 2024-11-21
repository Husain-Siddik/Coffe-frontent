<template>
    <div class="bg-[url('../assets/images/more/11.png')] bg-no-repeat flex items-center justify-center">

        <div class="container  rounded-lg">

            <div class="py-10">
                <p class=" text-3xl font-MyFont font-semibold flex gap-5 ">
                    <span>
                        <BxArrowBack />
                    </span>
                    Back to home
                </p>
            </div>
            <!--  from here -->

            <div class=" bg-[#F4F3F0] md:p-28 rounded-xl  ">

                <div class="border flex flex-col md:flex-row  items-center justify-center">
                    <div class=" flex-1  md:pl-10">
                        <img src="../assets/images/3.png" alt="" srcset="">
                    </div>
                    <!-- text item  -->
                    <div class=" text-2xl flex-1 pb-6">
                        <h1 class="font-MyFont text-4xl font-semibold pb-9
                    "> Coffee Name here</h1>
                        <p>Name : coffee name</p>
                        <p> Chef : mrX</p>
                        <p> Supplyer : Mr.Y</p>
                        <p> Test : Swweet And hot</p>
                        <p> Catagory : Americano</p>
                        <p>Details : Coffee Details</p>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { BxArrowBack } from '@kalimahapps/vue-icons';
</script>
