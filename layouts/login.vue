<script setup lang="ts">
    import Navbar from "~/components/layout/navbar.vue"
    const route = useRoute()

    useHead({
        title: route.meta.title? route.meta.title : route.name
    })
</script>

<template>
    <div class="h-screen bg-teal-400">
        <Navbar/>
        <div class="p-4 pt-8 max-w-6xl mx-auto flex items-center justify-center flex-col page-container">
            <slot></slot>
        </div>
    </div>
</template>

<style>
  .page-container{
    height: calc(100dvh - (50px + 2rem));
  }
</style>