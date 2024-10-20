<script setup lang="ts">

import type {listClassButton} from "../../typesWarehouse";
// @ts-ignore
defineProps<{ class_setting: listClassButton }>()
</script>

<template>
  <button :class="class_setting">
    <slot>
    </slot>
  </button>

</template>

<style scoped>
.button_settings {
  width: 170px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid rgba(216, 220, 233, 1);
  border-radius: 4px;
  cursor: pointer;
}
.button_save_remove {
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button_look {
  cursor: pointer;
  width: 84px;
  height: 24px;
  border-radius: 4px;
  background: rgba(80, 104, 165, 1);
  border: none;
}
.button_size_list {
  border: none;
  background: none;
  cursor: pointer;
}
.button_social {
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button_info_sorted {
  cursor: pointer;
  width: 21px;
  height: 20px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>