<template>
    
    <h2 class="autotype whitespace-nowrap text-center text-[50px] absolute top-[50%] left-0 right-0 lg:-translate-y-[200%]">
        <span ref="autotype_element" class="text-shadow font-extrabold"></span><span class="animate-[flashing_500ms_ease-in-out_infinite] inline-block">_</span>
    </h2>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const autotype_element = ref(null);
let autotype_text = props.title;
let timer = null;

const autotype_animation = () => {
    let i = 0;
    timer = setInterval(() => {
        
        autotype_element.value.innerText = autotype_text.slice(0, i++);

        if(i > autotype_text.length) {
            clearInterval(timer);
            i = 0;
        }

    }, 200)

}

onMounted(() => {
  autotype_animation();
});

onUnmounted(() => {
    clearInterval(timer);
})

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<style scoped>
.text-shadow {
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  text-shadow: 3px 3px 5px rgba(255, 255, 255, 1);
}
</style>