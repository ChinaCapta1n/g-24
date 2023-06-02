<template>
    <section class="home bg-black">
        <banner-section />
        <div class="container mx-auto">
            <fitness-address />
            <div class="why-24-fitness text-white">
                <ul class="flex flex-wrap justify-between">
                    <li class="w-[100%] sm:w-[48%] mb-[40px] px-[20px] sm:px-[0px]" v-for="why in why_24_fitness_data" :key="why.id">
                        <img class="object-cover w-full" src="~/assets/images/home/1.jpeg" alt="">
                        <h2 class="my-5 text-[28px]" v-html="why.title"></h2>
                        <p v-html="why.description"></p>
                    </li>
                </ul>
            </div>
            
        </div>
    </section>
</template>

<script setup>
import BannerSection from './components/banner-section.vue';
import FitnessAddress from './components/address.vue';


const why_24_fitness_data = [
    {
        id: 0,
        imageUrl: "~/assets/images/home/1.jpeg",
        title: "<全自動化的健身室>",
        description: "G-24採取全自動化運作，中心一般情況沒有職員，繁忙時間(630PM-930PM)會有教練基本指導。G-24沒有捆綁式合約，會藉按月收費，客人無需預繳任何費用。中心亦沒有任何教練進行銷售，因此客人無需要擔心被教練銷售，可以輕鬆在G-24訓練。"
    },
    {
        id: 1,
        imageUrl: "~/assets/images/home/2.jpeg",
        title: "<完善的器材>",
        description: "G-24有完善的訓練器材，包括各種重型訓練器材(FREE WEIGHT)，能夠應付高級組客人的訓練需要。除此之外我們亦設有多種訓練器械(MACHINE)，能夠讓新手輕鬆地鍛鍊目標肌肉。"
    },
    {
        id: 2,
        imageUrl: "~/assets/images/home/3.jpeg",
        title: "<極度整潔的空間>",
        description: "G-24對環境的整潔極度執著，我們在合約條款中要求客人必需要保持場地的整潔，包括消毒用完的設備／用完的設備放回原位／切勿隨處棄置垃圾等等。若客人多次犯規，我們有權立即將其會藉暫停並禁止其進入。"
    },
    {
        id: 3,
        imageUrl: "~/assets/images/home/4.jpeg",
        title: "<交通便利，泊車方便>",
        description: "G-24 <span class='text-yellow-300'>鄰近多個地鐵站</span>，包括 <span class='text-yellow-300'>土瓜灣／何文田／黃埔／紅磡</span> 等，步行約 <span class='text-yellow-300'>５至１０分鐘即可到達</span> ，非常方便！ <br /> 我們所處的位置（鶴園街）亦非繁忙位置， <span class='text-yellow-300'>附近有多處泊車位置</span> ，客人可以選擇將車 <span class='text-yellow-300'>泊在G-24門口或鄰近街道</span>，非常方便！"
    },
]

</script>