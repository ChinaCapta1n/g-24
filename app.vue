<template>
  <Html>
    <Body class="tracking-[1px] leading-8">
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage :transition="{
          name: 'page',
          mode: 'out-in',
          onBeforeEnter
        }"></NuxtPage>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.3;
  filter: blur(.5rem);
}
</style>