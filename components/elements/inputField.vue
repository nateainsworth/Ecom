<script setup lang="ts">

    const props = defineProps({
        label:String,
        type:String,
        error:String,
        fieldId:String || undefined,
        value:Object,
    })

</script>
<template>
    <div class="mb-4 pt-4">
      <label :for="props.fieldId" class="block text-gray-700 font-semibold mb-1">{{ props.label }}:</label>
      <input v-bind="props.value" :name="props.fieldId" :id="props.fieldId" :type="props.type" class="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200 focus:border-blue-500">
      <span class="text-red-500 text-sm">{{ props.error }}</span>
    </div>
</template>