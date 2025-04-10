<script setup lang="ts">
import { ref } from 'vue'
import UploadSave from '../saves/UploadSave.vue'

const fileInput = ref<HTMLInputElement | null>(null)

const triggerUpload = (): void => {
  fileInput.value?.click()
}

const handleFileUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    // Do something with the file, like emit it or upload
    console.log('Uploaded file:', file.name)
  }
}
</script>

<template>
  <header class="d-flex justify-content-between align-items-center p-4 border-bottom bg-light">
    <div class="d-flex flex-row justify-content-center align-items-center">
      <img src="../../assets/images/world-stone-transparent.png" class="header-image" />
      <h1 class="ms-3 mb-0">Remnant: From the Ashes - World Analyzer</h1>
    </div>
    <div class="d-flex flex-row align-items-center justify-content-center me-3">
      <input type="file" ref="fileInput" class="d-none" @change="handleFileUpload" />
      <UploadSave />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-image {
  width: 75px;
  height: 75px;
}
</style>
