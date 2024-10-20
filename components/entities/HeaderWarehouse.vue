<script setup lang="ts">
import { listClassButton } from "../../typesWarehouse";
</script>

<template>
  <div class="header_body">
    <div class="header_title">Мой склад</div>
    <ButtonWarehouse :class_setting="listClassButton.BUT_SETTINGS" >
        <div class="header_button">
          <img src="public/icons/settings.svg" alt="icon">
          <div>Настройки отчета</div>
        </div>
    </ButtonWarehouse>
  </div>

</template>

<style scoped>
.header_body {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
}
.header_title {
  font-size: 30px;
  font-weight: 600;
}
.header_button {
  display: flex;
  align-items: center;
}
.header_button div {
  font-size: 14px;
  font-weight: 400;
  padding-left: 5px;
}
</style>