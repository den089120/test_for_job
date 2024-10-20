<script setup lang="ts">

import {listClassButton} from "../../typesWarehouse";
import ToolbarLink from "../widgets/ToolbarLink.vue";
</script>

<template>
  <div>
    <div class="footer_toolbar">
      <ButtonWarehouse :class_setting="listClassButton.BUT_SOCIAL">
        <img src="public/icons/telegramm.svg" alt="telegramm">
      </ButtonWarehouse>
      <ButtonWarehouse :class_setting="listClassButton.BUT_SOCIAL">
        <img src="public/icons/instagramm.svg" alt="instagramm">
      </ButtonWarehouse>
      <ButtonWarehouse :class_setting="listClassButton.BUT_SOCIAL">
        <img src="public/icons/vk.svg" alt="icon">
      </ButtonWarehouse>
    </div>
    <div class="footer_toolbar">
      <ToolbarLink text="Партнёрская программа"/>
    </div>
  </div>
</template>

<style scoped>
.footer_toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 144px;
}
</style>