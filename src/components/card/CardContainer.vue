<script>
import Card from './Card.vue'

const props = defineProps({
  // Import a type here, figure out why it isnt working
})
</script>

<template>
  <div class="container py-5">
    <div class="d-flex flex-row justify-content-start">
      <div
        class="d-flex justify-content-center mb-4"
        v-for="(card, index) in cards"
        :key="index"
      >
        <Card :image="card.image" :name="card.name" :description="card.description" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
