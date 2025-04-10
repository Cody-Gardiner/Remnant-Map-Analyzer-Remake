// Component that will define a card element
<script setup lang="ts">
import type { CardDescriptor } from './card'

const props = defineProps<{
  card: CardDescriptor
}>()
</script>

<template>
  <div class="container py-5">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col">
        <div class="card shadow-lg border-0 rounded-3 hover-shadow">
          <img :src="props.card.image" class="card-img-top" alt="Card image" />
          <div class="card-body">
            <h3 class="card-title">{{ props.card.name }}</h3>
            <p class="card-text">{{ props.card.description }}</p>
          </div>
        </div>
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
</style>
