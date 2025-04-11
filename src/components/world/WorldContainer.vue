<script setup lang="ts">
import CardContainer from '../card/CardContainer.vue'
import { WorldData } from './worldData'

defineProps<{
  worldData: WorldData
}>()
</script>

<template>
  <div class="mt-5 d-flex flex-column align-items-center justify-content-center">
    <div class="text-center mb-4 w-100 bg-light">
      <section class="text-center py-5">
        <h1 class="display-1 fw-bold mb-0">World Locations</h1>
      </section>
    </div>
    <CardContainer :data="worldData.locations" />
  </div>
</template>
