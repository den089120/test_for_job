<script setup lang="ts">

import {listIconToolbar} from "../../typesWarehouse";

defineProps<{ src_setting: listIconToolbar, text: string }>()
</script>

<template>
  <div class="toolbar_item">
    <img :src="src_setting" alt="icon">
    <div class="toolbar_item_text">
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.toolbar_item {
  display: flex;
  width: 100%;
  height: 48px;
  padding-left: 22px;
  align-items: center;
}
.toolbar_item_text {
  font-weight: 700;
  font-size: 14px;
  padding-left: 10px;
}
</style>