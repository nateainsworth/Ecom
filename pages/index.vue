<script setup lang="ts">

    const filters= ref(true)

    useHead({
        title: "Shop"
    });
    
    definePageMeta({
        title: 'Shop'
    })
</script>
<template>
    <div class="flex flex-row pb-4">
        <div class="self-end">
            <p class="flex items-center" @click="filters = !filters">Filter <IconsFilter class="ml-2"/></p>
        </div>
    </div>
    <hr class="mb-4"/>

</template>