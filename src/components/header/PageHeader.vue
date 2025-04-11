<script setup lang="ts">
import { FileReaderPayload } from '@/constants/fileContents'
import UploadSave from '../saves/UploadSave.vue'

const emit = defineEmits<{
  (e: 'file-read', payload: FileReaderPayload): void
}>()

const handleFileContents = (payload: FileReaderPayload) => {
  emit('file-read', payload)
}
</script>

<template>
  <header class="d-flex justify-content-between align-items-center p-4 border-bottom bg-light">
    <div class="d-flex flex-row justify-content-center align-items-center">
      <img
        src="../../assets/images/world-stone-transparent.png"
        class="header-image"
        alt="Remnant World Stone"
      />
      <h1 class="ms-3 mb-0">Remnant: From the Ashes - World Analyzer</h1>
    </div>
    <div class="d-flex flex-row align-items-center justify-content-center me-3">
      <UploadSave @file-read="handleFileContents" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-image {
  width: 75px;
  height: 75px;
}
</style>
