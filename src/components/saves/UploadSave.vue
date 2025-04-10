<script setup lang="ts">
import { ref } from 'vue'
import CloudArrowUpIcon from '../icons/CloudArrowUpIcon.vue'

const emit = defineEmits<{
  (e: 'files-selected', files: File[]): void
}>()

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const triggerFileInput = () => {
  fileInput.value?.click()
}

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = input.files ? Array.from(input.files) : []
  emit('files-selected', files)
}

const onDrop = (event: DragEvent) => {
  isDragging.value = false
  const files = event.dataTransfer?.files ? Array.from(event.dataTransfer.files) : []
  emit('files-selected', files)
}

const onDragOver = () => {
  isDragging.value = true
}

const onDragLeave = () => {
  isDragging.value = false
}
</script>

<template>
  <div
    role="button"
    class="d-flex flex-row align-items-center justify-content-center border-dashed p-1 w-75"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
    @click="triggerFileInput"
  >
    <div
      class="d-flex flex-row align-items-center justify-content-center"
      :class="{
        'bg-blue-50 border-blue-400': isDragging,
        'border-gray-300 hover:border-blue-400 hover:bg-blue-50': !isDragging,
      }"
    >
      <CloudArrowUpIcon class="w-25 h-25 m-1" />
      <p class="text-gray-600 mb-0 ml-2" v-if="!isDragging">
        Drag & drop save file here or click to browse
      </p>
      <p class="font-medium mb-0 ml-2" v-else>Drop your files here</p>
      <input ref="fileInput" type="file" hidden @change="onFileChange" :multiple="false" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.border-dashed {
  border-style: dashed;
  border-width: 3px;
  border-color: black;
}
.ml-2 {
  margin-left: 8px;
}
</style>
