<script setup lang="ts">
import { ref, computed } from 'vue'
import { ImageFiles } from '@/constants/images'
import { Descriptions } from '@/constants/descriptions'

// Component that will define a card element

const props = defineProps<{
  name: string | undefined
}>()

const expanded = ref(false)

const toggleExpand = () => {
  expanded.value = !expanded.value
}

const imgSrc = computed(() => {
  const editName = props.name?.replace(' ', '').substring(0, props.name.indexOf('x') - 1)
  const imageFileEdit = ImageFiles[editName as keyof typeof ImageFiles]
  const imageFile = ImageFiles[props.name as keyof typeof ImageFiles]

  if (imageFile) {
    return imageFile
  } else if (imageFileEdit) return imageFileEdit
  return '../src/assets/images/world-stone.png'
})

const description = computed(() => {
  const editName = props.name?.replace(' ', '').substring(0, props.name.indexOf('x') - 1)
  const descriptionEdit = Descriptions[editName as keyof typeof Descriptions]
  const description = Descriptions[props.name as keyof typeof Descriptions]

  if (description) {
    return description
  } else if (descriptionEdit) return descriptionEdit

  return ''
})
</script>

<template>
  <div class="m-3" @click="toggleExpand">
    <div
      class="position-relative d-flex justify-content-center align-items-center card shadow-lg border-0 rounded-3 hover-shadow p-3 m-2"
      style="max-width: 275px; cursor: pointer"
    >
      <!-- Toggle Icon -->
      <div
        class="position-absolute top-0 end-0 mx-3 mt-2"
        :style="{
          transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }"
      >
        <i class="bi bi-chevron-down fs-1">^</i>
      </div>

      <img :src="imgSrc" class="p-2 rounded-circle shadow-lg bg-dark rounded-3" alt="Card image" />
      <div class="card-body" style="width: 100%">
        <h3 class="card-title text-wrap text-break text-center">
          {{ props.name?.replace(/([A-Z])/g, ' $1').trim() }}
        </h3>
        <hr class="bg-dark border-3 border-bottom" />
        <p
          class="card-text text-center"
          :style="
            expanded
              ? 'max-height: none; overflow: visible;'
              : 'max-height: 4.5em; overflow: hidden; text-overflow: ellipsis;'
          "
        >
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
img {
  width: 150px;
  height: 150px;
}
</style>
