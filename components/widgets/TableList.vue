<script setup lang="ts">

import {typeSizeItem} from "../../stores/typesStore/typeMyWarehouseStore";
// @ts-ignore
defineProps<{sizeList: Array<typeSizeItem>, idItem1: string}>()
</script>

<template>
  <div class="model_list">
    <div class="model_list_title">
      <img src="public/icons/measuring_tape.svg" alt="icon">
      <div>Размерный ряд</div>
    </div>
    <div class="model_list_body">
      <div class="header">
        <div class="header_item">Размер</div>
        <div class="header_item">Остаток на WB </div>
        <div class="header_item">Хватит на</div>
        <div class="header_item">Остаток у поставщика</div>
        <div class="header_item">Хватит на</div>
        <div class="header_item">Остаток мой склад</div>
        <div class="header_item">Хватит на</div>
        <div class="header_item">Остаток всего</div>
        <div class="header_item">Хватит на </div>
        <div class="header_item">В пути от производителя</div>
        <div class="header_item">Скорость заказов</div>
        <div class="header_item">История изменения</div>
      </div>
    </div>
    <TableListItem v-for="elem in sizeList" :size-list="elem" :key="elem.id" :id-item="idItem1"/>

  </div>

</template>

<style scoped>
.model_list {
  background: rgba(248, 248, 248, 1);
  border-left: 4px solid rgba(165, 210, 116, 1);
  border-radius: 4px;
  padding: 10px;
}
.model_list_title {
  display: flex;
}
.model_list_title img {
  width: 24px;
  height: 24px;
}
.model_list_title div {
  font-size: 12px;
  font-weight: 400;
}
.model_list_body {}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  padding: 15px;
}
.header_item {}
</style>