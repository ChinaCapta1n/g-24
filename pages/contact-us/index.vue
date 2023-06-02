<template>
    <page-template>
        <template #image></template>
        <template #title>
            <h2-title-with-autotype title="Gym Photo" />
        </template>
        <div class="p-[20px]">
            <ul class="text-yellow-500 text-center">
                <li class="my-[20px] text-[20px]" v-for="address in contact_data.info_address" :key="address">
                    {{ address }}
                </li>
            </ul>
            <ul>
                <li v-for="image in contact_data.info_images" :key="image">
                    <img class="max-w-600px mx-[auto] my-[30px] hover:scale-[1.02] transition-all rounded-lg" :src="getImageUrl(image)" alt="">
                </li>
            </ul>
        </div>
    </page-template>
</template>

<script setup>
function getImageUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
}

const contact_data = {
    info_address: [
        'Phone number: 98809006',
        'Address: Shop P1, Ground Floor, No. 9 Hok Yuen Street, Hung Hom, Kowloon, Hong Kong (next to Kaixuan Industrial and Commercial Center Phase III)',
        '(Ho Man Tin Station Exit A1 / Whampoa Station Exit A / To Kwa Wan Station Exit D1)',
        'Email address: G24FITNESSHK@GMAIL.COM'
    ],
    info_images: [
        '../../assets/images/about/2.jpeg'
    ]
}

</script>