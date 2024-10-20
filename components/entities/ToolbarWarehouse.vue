<script setup lang="ts">

import {listIconToolbar} from "../../typesWarehouse";
// import FooterToolbar from "#build/components/entities/FooterToolbar.vue";
</script>

<template>
  <div class="toolbar">
    <LogoWarehouse/>
    <ToolbarItem :src_setting="listIconToolbar.MY_WAREHOUSE" :text="'Мой склад'"/>
    <FooterToolbar class="toolbar_footer"/>
  </div>

</template>

<style scoped>
.toolbar {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: rgba(24, 34, 70, 1);
}
.toolbar_footer {
  position: absolute;
  bottom: 24px;
  left: 48px;
}
</style>