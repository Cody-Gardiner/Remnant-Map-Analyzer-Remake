<script setup lang="ts">
import { ref } from 'vue'

import Explaination from '../explanation/Explaination.vue'
import PageHeader from '../header/PageHeader.vue'

import { FileReaderPayload } from '@/constants/fileContents'
import { CardItem } from '@/components/card/cardItem'
import { processFileData } from '@/processor/process'
import { getDistinctByKey, getDistinctCardItemsWithCount } from '@/processor/helpers/getDistinct'
import { WorldData } from '../world/worldData'
import CardContainer from '../card/CardContainer.vue'

const worldData = ref<WorldData>()
const character = ref('') // TODO
const bosses = ref<Array<CardItem>>()
const items = ref<Array<CardItem>>()
const sideQuests = ref<Array<CardItem>>()

// Handle file contents
const handleFileContents = (payload: FileReaderPayload) => {
  // Process File contents into containers
  const fileData = processFileData(payload.content?.toString())

  worldData.value = fileData?.worldData
  bosses.value = getDistinctByKey(fileData?.bosses, 'name')
  sideQuests.value = getDistinctByKey(fileData?.sideQuests, 'name')
  items.value = getDistinctCardItemsWithCount(fileData?.items ?? [])
}
</script>

<template>
  <PageHeader @file-read="handleFileContents" />
  <Explaination />
  <CardContainer
    v-if="worldData"
    :data="worldData.locations"
    :title="'World Locations | Current Location: ' + worldData?.currentMainLocation"
  />
  <CardContainer v-if="sideQuests" :data="sideQuests" :title="'Side Quests'" />
  <CardContainer v-if="character" :data="character" :title="'Character Information'" />
  <CardContainer v-if="bosses" :data="bosses" :title="'Bosses'" />
  <CardContainer v-if="items" :data="items" :title="'Items'" />
</template>
