<script setup lang="ts">
import { ref } from 'vue'

import BossContainer from '../bosses/BossContainer.vue'
import CharacterContainer from '../character/CharacterContainer.vue'
import Explaination from '../explanation/Explaination.vue'
import PageHeader from '../header/PageHeader.vue'
import ItemsContainer from '../items/ItemsContainer.vue'

import { FileReaderPayload } from '@/constants/fileContents'
import { CardItem } from '@/components/card/cardItem'
import { processFileData } from '@/processor/process'
import SideQuestContainer from '../sideQuests/SideQuestContainer.vue'
import { getDistinctByKey } from '@/processor/helpers/getDistinct'
import WorldContainer from '../world/WorldContainer.vue'
import { WorldData } from '../world/worldData'

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
  items.value = []
  sideQuests.value = getDistinctByKey(fileData?.sideQuests, 'name')

  console.log('World Data', worldData)
  console.log('Bosses', bosses.value)
  console.log('Items', items.value)
  console.log('SideQuests', sideQuests.value)

  fileData?.items.forEach((element) => {
    items.value?.push(element)
  })
}
</script>

<template>
  <PageHeader @file-read="handleFileContents" />
  <Explaination />
  <WorldContainer v-if="worldData" :worldData="worldData" />
  <CharacterContainer v-if="character.length > 0" :character="character" />
  <BossContainer v-if="bosses?.length > 0" :bossData="bosses" />
  <SideQuestContainer v-if="sideQuests?.length > 0" :locations="sideQuests" />
  <ItemsContainer v-if="items?.length > 0" :items="items" />
</template>
