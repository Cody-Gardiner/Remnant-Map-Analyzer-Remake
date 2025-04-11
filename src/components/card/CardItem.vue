<script setup lang="ts">
import { computed } from 'vue'
import { BossImages } from '@/constants/bosses'
import { ItemImages } from '@/constants/items'

// Component that will define a card element

const props = defineProps<{
  name: string | undefined
}>()

const imgSrc = computed(() => {
  const bossFile = BossImages[props.name as keyof typeof BossImages]
  const itemFile = ItemImages[props.name as keyof typeof ItemImages]

  if (bossFile) {
    return `../src/assets/images/bosses/${bossFile}`
  } else if (itemFile) {
    return `../src/assets/images/items/${itemFile}`
  } else {
    return ''
  }
})

const getDescription = (name: string | undefined) => {
  if (!name) return ''
}
</script>

<template>
  <div class="m-3 py-5">
    <div class="card shadow-lg border-0 rounded-3 hover-shadow p-3">
      <img :src="imgSrc" class="p-2 rounded-circle shadow-lg bg-black rounded-3" alt="Card image" />
      <div class="card-body">
        <h3 class="card-title text-center">{{ props.name?.replace(/([A-Z])/g, ' $1').trim() }}</h3>
        <p class="card-text text-center">{{ getDescription(props.name) }}</p>
      </div>

      <hr />
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
  width: 300px;
  height: 300px;
}
</style>
