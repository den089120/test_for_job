<script setup lang="ts">
import TableHeader from "../widgets/TableHeader.vue";

import {useMyWarehouseStore} from "../../stores/My_warehouseStore";

const warehouseStore = useMyWarehouseStore()
const warehouseList = warehouseStore.warehouseList
</script>

<template>
  <div class="table">
    <div class="table_title">
      <div class="table_title_text">Товары:</div>
      <div class="table_title_number">134 шт.</div>
    </div>
    <TableHeader/>
    <TableItem v-for="el in warehouseList" :warehouse-item="el" :key="el.id"/>
  </div>

</template>

<style scoped>
.table {
  padding: 24px;
  background: rgba(255, 255, 255, 1);
}
.table_title {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 24px;
}
.table_title_text {
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
}
.table_title_number {
  font-size: 18px;
  font-weight: 600;
  margin-right: 5px;
  color: rgba(234, 93, 187, 1);
}
</style>