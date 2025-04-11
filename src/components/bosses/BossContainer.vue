<script setup lang="ts">
import CardItem from '../card/CardItem.vue'
import CardContainer from '../card/CardContainer.vue'

// Container that will house boss characters in the world
defineProps<{
  bossData: Array<typeof CardItem>
}>()
</script>

<template>
  <div class="container d-flex flex-column align-items-center justify-content-center">
    <div class="text-center mb-4">
      <h1>Bosses</h1>
    </div>
    <CardContainer :data="bossData" />
  </div>
</template>
