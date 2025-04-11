<script setup lang="ts">
import CardItem from './CardItem.vue'

const props = defineProps<{
  data: (typeof CardItem)[]
  title: string
}>()
</script>

<template>
  <div class="mt-2 mx-4 d-flex flex-column align-items-center justify-content-center">
    <div class="m-0 w-100 py-2">
      <div class="text-center mb-4 w-100 bg-light shadow-lg">
        <section class="text-center py-5">
          <h1 class="display-2 fw-bold mb-0">{{ props.title }}</h1>
        </section>
      </div>
      <div class="d-flex flex-row justify-content-center flex-wrap">
        <div
          class="d-flex justify-content-center mb-4"
          v-for="(cardValue, index) in data"
          :key="index"
        >
          <CardItem :name="cardValue.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
