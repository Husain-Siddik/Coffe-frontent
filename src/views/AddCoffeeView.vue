<script setup>
import { BxArrowBack } from '@kalimahapps/vue-icons';
</script>

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

            <div class=" bg-[#F4F3F0] md:p-28 space-y-10">
                <!-- text item  -->
                <div class="text-center ">
                    <h1 class="font-MyFont text-5xl font-semibold pb-9
                    ">Add New Coffee</h1>
                    <p class="text-xl font-ralway">It is a long established fact that a reader will be distraceted by
                        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form>
                    <div class=" grid grid-cols-1 md:grid-cols-2   gap-3 md:gap-7">

                        <label class="form-control w-full px-4 ">
                            <div class="label">
                                <span class="font-ralway text-xl">Name</span>

                            </div>
                            <input type="text" placeholder="Enter coffee name" class="input input-bordered w-full " />

                        </label>
                        <label class="form-control w-full px-4 ">
                            <div class="label">
                                <span class="font-ralway text-xl">Chef</span>

                            </div>
                            <input type="text" placeholder="Enter coffee chef" class="input input-bordered w-full " />

                        </label>

                        <label class="form-control w-full px-4 ">
                            <div class="label">
                                <span class="font-ralway text-xl">Supplier</span>

                            </div>
                            <input type="text" placeholder="Enter coffee supplier"
                                class="input input-bordered w-full " />

                        </label>
                        <label class="form-control w-full px-4 ">
                            <div class="label">
                                <span class="font-ralway text-xl">Taste</span>

                            </div>
                            <input type="text" placeholder="Enter coffee taste" class="input input-bordered w-full " />

                        </label>

                        <label class="form-control w-full px-4 ">
                            <div class="label">
                                <span class="font-ralway text-xl">Category</span>

                            </div>
                            <input type="text" placeholder="Enter coffee category"
                                class="input input-bordered w-full " />

                        </label>
                        <label class="form-control w-full px-4 ">
                            <div class="label">
                                <span class="font-ralway text-xl">Details</span>

                            </div>
                            <input type="text" placeholder="Enter coffee details"
                                class="input input-bordered w-full " />

                        </label>

                    </div>

                    <div class="  text-center  ">
                        <label class="form-control w-full px-4 ">
                            <div class="label">
                                <span class="font-ralway text-xl">Photo</span>

                            </div>
                            <input type="file" class="file-input w-full max-w-full" />

                        </label>
                        <button type="submit"
                            class="w-[98%] font-MyFont text-2xl p-3 border rounded-lg mt-5 bg-[#D2B48C] "><Span>Add</Span>
                            Coffee</button>
                    </div>


                </form>

            </div>
        </div>

    </div>
</template>