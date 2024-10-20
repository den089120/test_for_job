<script setup lang="ts">
import {listClassButton} from "../../typesWarehouse";
import {WarehouseItem} from "../../stores/typesStore/typeMyWarehouseStore";
// @ts-ignore
import {Ref} from "vue";
// @ts-ignore
defineProps<{warehouseItem: WarehouseItem}>();

const visible: Ref = ref(true);
function changeVisible () {
  visible.value = !visible.value
}
</script>

<template>
  <div class="item_body">
    <div class="item_body_top">
      <div class="item_body_top_title">
        <img src="public/images/flowers_1.svg" alt="">
        <div class="item_body_top_content">
          <div class="item_body_top_content_text">
            <div class="item_body_top_content_text_1">
              {{ warehouseItem.name1 }}
            </div>
            <div class="item_body_top_content_text_2">
              <div>
                {{ warehouseItem.name2 }}
              </div>
              <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
                <img src="public/icons/link.svg" alt="icon">
              </ButtonWarehouse>
              <ButtonWarehouse :class_setting="listClassButton.BUT_INFO_SORTED">
                <img src="public/icons/info.svg" alt="icon">
              </ButtonWarehouse>
            </div>
          </div>
          <div class="item_body_top_content_article">
            {{ warehouseItem.Article }}
          </div>
        </div>
      </div>
      <div class="item_body_top_list">
        <div class="top_list_element">
          <div class="top_list_element_number">
            33 222 шт.
          </div>
          <div class="top_list_element_resource">
            Хватит на 23 дн.
          </div>
        </div>
        <div class="top_list_element">
          <div class="top_list_element_number">
            33 222 шт.
          </div>
          <div class="top_list_element_resource">
            Хватит на 23 дн.
          </div>
        </div>
        <div class="top_list_element">
          <div class="top_list_element_number">
            33 222 шт.
          </div>
          <div class="top_list_element_resource">
            Хватит на 23 дн.
          </div>
        </div>
        <div class="top_list_element">
          <div class="top_list_element_number">
            33 222 шт.
          </div>
          <div class="top_list_element_resource">
            Хватит на 23 дн.
          </div>
        </div>
        <div class="top_list_element">
          <div class="top_list_element_number">
            33 222 шт.
          </div>
          <div class="top_list_element_resource">
            Хватит на 23 дн.
          </div>
        </div>
        <div class="top_list_element">
          <div class="top_list_element_number">
            33 222 шт.
          </div>
          <div class="top_list_element_resource">
            Хватит на 23 дн.
          </div>
        </div>
        <div class="top_list_element">
          <ButtonWarehouse :class_setting="listClassButton.BUT_LOOK">
            <span>Посмотреть</span>
          </ButtonWarehouse>
        </div>
      </div>
    </div>
    <div class="item_body_links">
      <ButtonWarehouse :class_setting="listClassButton.BUT_SIZE_LIST" @click="changeVisible">
        <div>Размерный ряд</div>
        <img v-if="visible" src="public/icons/open.svg" alt="icon open">
        <img v-else src="public/icons/close.svg" alt="icon open">
      </ButtonWarehouse>
    </div>
    <TableList :size-list="warehouseItem.sizeList" :class="{display_none: visible}" :id-item1="warehouseItem.id"/>
  </div>
</template>

<style scoped>
.item_body {
  padding: 20px;
  border: 1px solid rgba(216, 220, 233, 1);
  border-radius: 4px;
  margin-top: 16px;
}
.item_body_top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.item_body_top_title {
  display: flex;
  width: 385px;
}
.item_body_top_title img {
  width: 34px;
  height: 46px;
}
.item_body_top_content {
  margin-left: 15px;
  max-width: 294px;
}
.item_body_top_content_text_1 {
  color: rgba(80, 104, 165, 1);
}
.item_body_top_content_text_2 {
  display: flex;
}
.item_body_top_content_text_2 div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(80, 104, 165, 1);
}
.item_body_top_content_text_2 button {
  margin: 3px;
}
.item_body_top_content_text_2 button img {
  width: 20px;
  height: 20px;
}

.item_body_top_list {
  display: flex;
  justify-content: space-between;
  width: 1099px;
}
.top_list_element {

}
.top_list_element_number {
  margin: 2px;
  width: fit-content;
  color: rgba(80, 104, 165, 1);
  border-bottom: 1px dotted rgba(80, 104, 165, 1);
}
.top_list_element_resource {
  font-weight: 400;
  font-size: 12px;
  width: 128px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(248, 248, 248, 1);
  border-radius: 4px;
  color: rgba(102, 102, 102, 1);
}

.top_list_element button span {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255,255,255, 1);
}

.item_body_links button {
  display: flex;
}
.item_body_links button img {
  display: block;
}
.item_body_links button div {
  font-size: 14px;
  font-weight: 400;
  color: rgba(80, 104, 165, 1);

}
.display_none {
  display: none;
}
</style>