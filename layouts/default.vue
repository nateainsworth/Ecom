<script setup lang="ts">
    import Navbar from "~/components/layout/navbar.vue"
    const route = useRoute()

</script>

<template>
    <div class="h-screen">
        <Navbar/>
        <div class="p-4 pt-8 max-w-6xl mx-auto">
            <h1 class="text-5xl grow">{{ route.meta.title? route.meta.title : route.name}}</h1>

            <slot></slot>
        </div>
    </div>
</template>