<script setup lang="ts">
import CardItem from './CardItem.vue'

defineProps({
  data: Array<typeof CardItem>,
})
</script>

<template>
  <div class="m-0 w-100 py-2">
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
</template>

<style scoped lang="scss"></style>
