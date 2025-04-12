<script setup lang="ts">
import { ref } from 'vue'
import CloudArrowUpIcon from '../icons/CloudArrowUpIcon.vue'
import { FileReaderPayload } from '@/constants/fileContents'

const fileProperties = ref<FileReaderPayload>({
  name: '',
  content: null,
})

const emit = defineEmits<{
  (e: 'file-read', payload: FileReaderPayload): void
}>()

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const handleFile = (files: FileList | null) => {
  if (!files || files.length === 0) return

  const file = files[0]
  const allowedExtensions = ['.sav', '.bak']
  const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase()

  if (!allowedExtensions.includes(fileExtension)) {
    alert('Only .sav and .bak files are allowed.')
    return
  }

  const reader = new FileReader()

  reader.onload = () => {
    fileProperties.value.content = reader.result
    fileProperties.value.name = file.name
    emit('file-read', {
      name: file.name,
      content: fileProperties.value.content,
    })
  }

  reader.onerror = () => {
    alert('Failed to read file.')
  }

  reader.readAsText(file) // Change to readAsArrayBuffer if needed
}

const triggerFileInput = () => {
  fileInput.value?.click()
}

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  handleFile(target.files)
}

const onDrop = (event: DragEvent) => {
  isDragging.value = false
  handleFile(event.dataTransfer?.files || null)
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
    class="d-flex flex-row align-items-center justify-content-center border-dashed p-1"
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
      <p class="text-gray-600 mb-0 ml-2">Drag & drop save file here or click to browse</p>
      <input
        ref="fileInput"
        type="file"
        hidden
        @change="onFileChange"
        accept=".sav,.bak"
        :multiple="false"
      />
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
