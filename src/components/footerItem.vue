<template>
    <div>
        <footer
            class="footer bg-[url('../assets/images/more/13.jpg')] text-base-content p-10 flex   items-center justify-center mt-4 md:mt-20">


            <div class=" flex  flex-col md:flex-row gap-10 container items-center  justify-center">
                <div class="flex-1 space-y-5">
                    <img class="w-20 h-20" src="../assets/images/more/logo1.png" alt="" srcset="">
                    <h1 class="font-MyFont text-5xl font-semibold">Espresso Emporium</h1>
                    <p class="font-ralway text-xl">Always ready to be your friend. Come & Contact with us to share your
                        memorable moments, to share with your best companion.</p>

                    <div class="flex gap-3  text-4xl">
                        <p>
                            <BsFacebook />
                        </p>
                        <p>
                            <AkTwitterFill />
                        </p>
                        <p>
                            <FeInstagram />
                        </p>
                        <p>
                            <AkLinkedInV1Fill />
                        </p>
                    </div>
                    <p class="font-MyFont text-5xl">Get in Touch</p>
                    <div class="font-ralway text-xl ">
                        <p class="flex items-center  gap-4"><span>
                                <CaPhoneFilled />
                            </span> +88 01533 333 333</p>
                        <p class="flex items-center  gap-4"><span>
                                <MdRoundEmail />
                            </span>example@gmail.com</p>
                        <p class="flex items-center  gap-4"><span>
                                <CaLocationFilled />
                            </span> 72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
                <!--  -->



                <form class="flex-1  space-y-6 pt-3 md:pt-24">
                    <h6 class="font-MyFont text-5xl font-semibold">Connect with Us</h6>
                    <fieldset class="w-auto md:w-3/4">
                        <div class="space-y-4  ">
                            <input type="text" placeholder="Name" class="input   w-full max-w-xs" />
                            <input type="Email" placeholder="email" class="input  w-full max-w-xs" />
                            <textarea placeholder="Massage" class="textarea  textarea-lg w-full max-w-xs"></textarea>

                        </div>
                    </fieldset>
                    <button class="font-MyFont text-xl  px-4 rounded-badge border-x-black border  "><span
                            class="pr-2">Send </span>

                        <span>Message</span> </button>

                </form>
            </div>

        </footer>
    </div>

</template>

<script setup>
import { BsFacebook, AkTwitterFill, FeInstagram, MdRoundEmail } from '@kalimahapps/vue-icons';
import { AkLinkedInV1Fill, CaPhoneFilled, CaLocationFilled } from '@kalimahapps/vue-icons';

</script>
