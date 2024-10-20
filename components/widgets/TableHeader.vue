<script setup lang="ts">

import {listClassButton} from "../../typesWarehouse";
</script>

<template>
  <div class="header_body">
    <div class="header_body_name">
      Товар
    </div>
    <div class="header_menu">
      <div class="header_item">
        <div class="header_filter">
          <div>Остаток на WB</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/question.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
        <div class="header_balance">
          <div class="header_balance_text">Хватит на складе</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
      </div>
      <div class="header_item">
        <div class="header_filter">
          <div>Остаток у поставщика</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/question.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
        <div class="header_balance">
          <div class="header_balance_text">Хватит на складе</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
      </div>
      <div class="header_item">
        <div class="header_filter">
          <div>Остаток мой склад</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/question.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
        <div class="header_balance">
          <div class="header_balance_text">Хватит на складе</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
      </div>
      <div class="header_item">
        <div class="header_filter">
          <div>Остаток всего</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
        <div class="header_balance">
          <div class="header_balance_text">Хватит на складе</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
      </div>
      <div class="header_item">
        <div class="header_filter">
          <div>В пути от производителя</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/question.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
      </div>
      <div class="header_item">
        <div class="header_filter">
          <div>Скорость заказов</div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/sorting.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
        <div class="header_balance">
          <div class="header_balance_body">
            <div class="header_balance_text_1">за</div>
            <div class="header_balance_number">
              <span>7</span>
              <div class="header_balance_text_2">days</div>
            </div>
          </div>
          <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
            <img src="public/icons/question.svg" alt="icon"/>
          </ButtonWarehouse>
        </div>
      </div>
      <div class="header_item end_store">
        История изменения
      </div>
    </div>
  </div>
</template>

<style scoped>
.header_body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(80, 104, 165, 1);
  border-radius: 4px;
  padding-left: 24px;
  padding-right: 24px;
}
.header_body_name {
  color: rgba(255, 255, 255, 1);
}
.header_menu {
  display: flex;
  font-size: 13px;
  font-weight: 400;
  width: 1099px;
  justify-content: space-between;
}
.header_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4px;
}
.header_filter {
  display: flex;
  margin: 3px;
}
.header_filter div {
  margin-right: 3px;
  color: rgba(255, 255, 255, 1);
}
.header_filter button {
  margin: 1px;
}
.header_balance {
  display: flex;
}
.header_balance_text {
  margin: 3px;
  color: rgba(255, 255, 255, 1);
}
.header_balance_body {
  display: flex;
}
.header_balance_text_1 {
  color: rgba(255, 255, 255, 1);
}
.header_balance_number {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border-bottom: 1px dotted rgba(80, 104, 165, 1);
  width: 41px;
}
.header_balance_number span {
  margin-right: 4px;
  color: rgba(80, 104, 165, 1);
}
.header_balance_text_2 {
  color: rgba(80, 104, 165, 1);
}
.end_store {
  width: 65px;
  color: rgba(255, 255, 255, 1);
}
</style>