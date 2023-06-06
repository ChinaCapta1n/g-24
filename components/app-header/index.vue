<template>
    <header class="bg-black text-white sticky top-0 z-[1000]">
        <div class="relative">
            <div class="container mx-auto flex items-center">
                <div class="left mr-auto absolute top-[100%] left-0 right-0 bg-black lg:static h-0 lg:h-auto overflow-hidden lg:overflow-auto">
                    <div ref="mobile_menu_element" class="flex flex-col lg:flex-row">
                        <template v-for="link in myLinks" :key="link.id">
                            <NuxtLink :to="localePath(link.route)" class="mx-4 my-4 block" @click.stop="close_menu_fn">
                                <span>{{ $t(link.i18n) }}</span>
                            </NuxtLink>
                        </template>
                    </div>
                </div>
                <div class="right flex items-center w-full lg:w-auto px-[20px] sm:px-0">
                    <div class="flex items-center mr-auto">
                        <nuxt-icon class="my-4 mr-2 block h-[16px] hover:cursor-pointer" name="common/phone"></nuxt-icon>
                        <nuxt-icon class="my-4 mx-2 block h-[16px] hover:cursor-pointer" name="common/chat"></nuxt-icon>
                        <nuxt-icon class="my-4 mx-2 block h-[16px] hover:cursor-pointer" name="common/email"></nuxt-icon>
                        <NuxtLink class="flex items-center mx-2" v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
                            locale.name
                        }}</NuxtLink>
                    </div>
                    <div class="hamburger w-[25px] block lg:hidden hover:cursor-pointer" @click.stop="expand_or_collapse()">
                        <span class="block h-[2px] bg-white mb-[6px]"></span>
                        <span class="block h-[2px] bg-white mb-[6px]"></span>
                        <span class="block h-[2px] bg-white"></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value);
})

const myLinks = [
    { id: 0, i18n: 'nav.home', route: "/" },
    { id: 1, i18n: 'nav.contact_us', route: "/contact-us" },
    { id: 2, i18n: 'nav.q_and_a', route: '/q-and-a' },
    { id: 3, i18n: 'nav.price_list', route: '/price-list' },
    { id: 4, i18n: 'nav.gym_photo', route: '/gym-photo' },
    { id: 5, i18n: 'nav.join_membership_now', route: '/join-membership-now' }
];


// mobile menu
const mobile_menu_element = ref(null);
const expand_or_collapse = (isTransition = true) => {
    const transition_effect = isTransition ? "all cubic-bezier(0.4, 0, 0.2, 1) 150ms" : "none";
    const parent = mobile_menu_element.value.parentNode;
    const parent_height = parent.offsetHeight;
    const child_height = mobile_menu_element.value.offsetHeight;
    if (parent_height === 0) {
        parent.style.height = child_height + 'px';
        parent.style.transition = "all cubic-bezier(0.4, 0, 0.2, 1) 150ms";
    } else {
        parent.style.height = '0px';
        parent.style.transition = transition_effect;
    }
}

const close_menu_fn = () => {
    if (window.innerWidth <= 1024) expand_or_collapse(false);
}


onMounted(() => {
    window.addEventListener('resize', () => {
        if(window.innerWidth > 1024) mobile_menu_element.value.parentNode.style.height = 'auto';
        else mobile_menu_element.value.parentNode.style.height = '0px';
    })
})
</script>