<template>
    <div>
        <div class="banner-common relative ">
            <slot name="image">
                <img class="h-[350px] w-full object-cover" :src="DefaultImage" alt="">
            </slot>
            <slot name="title"></slot>
        </div>
        
        <div class="max-w-[1024px] mx-auto lg:-translate-y-[130px] bg-black lg:rounded-lg">
            <slot />
        </div>
    </div>
</template>

<script setup>
import DefaultImage from '~/assets/images/about/1.jpeg';
</script>