<script setup lang="ts">
import {listClassButton} from "../../typesWarehouse";
import {typeSizeItem} from "../../stores/typesStore/typeMyWarehouseStore";
import {useMyWarehouseStore} from "../../stores/My_warehouseStore";

const warehouseStore = useMyWarehouseStore()
const changeBalance = warehouseStore.changeBalance
// @ts-ignore
const props = defineProps<{
  sizeList: typeSizeItem
  idItem: string
}>();
// @ts-ignore
import {Ref} from "vue";

const isBalanceInWB: Ref = ref(false);
const isBalanceInTheSupplier: Ref = ref(false);
const isBalanceInMyWarehouse: Ref = ref(false);
const isBalanceAll: Ref = ref(false);
const isOnWayManufacturer: Ref = ref(false);

const balanceInWBNew: Ref = ref(props.sizeList.balanceInWB.toString());
const balanceInTheSupplierNew: Ref = ref(props.sizeList.balanceInTheSupplier.toString());
const balanceInMyWarehouseNew: Ref = ref(props.sizeList.balanceInMyWarehouse.toString());
const balanceAllNew: Ref = ref(props.sizeList.balanceAll.toString());
const onWayManufacturerNew: Ref = ref(props.sizeList.onWayManufacturer.toString());




function changeB (nameBalance: string, val: string) {
  changeBalance(props.idItem, props.sizeList.id, nameBalance, val)
}
</script>

<template>
  <div class="row">
    <div class="row_item_first">{{ props.sizeList.size }}</div>
    <div class="row_item" >
      <div class="row_input" :class="{visible_input: isBalanceInWB}">
        <input type="number" v-model="balanceInWBNew"/>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/save.svg" alt="" @click="isBalanceInWB=false;changeB('balanceInWB', balanceInWBNew);">
        </ButtonWarehouse>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/remove.svg" alt="" @click="isBalanceInWB=false;">
        </ButtonWarehouse>
      </div>

      <span @click.stop="isBalanceInWB=true;">{{ props.sizeList.balanceInWB }} шт.</span>
    </div>
    <div class="row_item">2 дня</div>
    <div class="row_item">
      <div class="row_input" :class="{visible_input: isBalanceInTheSupplier}">
        <input v-model="balanceInTheSupplierNew" type="number"/>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/save.svg" alt="" @click="isBalanceInTheSupplier=false;changeB('balanceInTheSupplier', balanceInTheSupplierNew)">
        </ButtonWarehouse>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/remove.svg" alt="" @click="isBalanceInTheSupplier=false;">
        </ButtonWarehouse>
      </div>

      <span @click="isBalanceInTheSupplier=true;">{{ props.sizeList.balanceInTheSupplier }} шт.</span>
    </div>
    <div class="row_item">5 дней</div>
    <div class="row_item">
      <div class="row_input" :class="{visible_input: isBalanceInMyWarehouse}">
        <input v-model="balanceInMyWarehouseNew" type="number"/>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/save.svg" alt="" @click="isBalanceInMyWarehouse=false;changeB('balanceInMyWarehouse', balanceInMyWarehouseNew)">
        </ButtonWarehouse>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/remove.svg" alt="" @click="isBalanceInMyWarehouse=false;">
        </ButtonWarehouse>
      </div>

      <span @click="isBalanceInMyWarehouse=true;">{{ props.sizeList.balanceInMyWarehouse }} шт.</span>
    </div>
    <div class="row_item">15 дней</div>
    <div class="row_item">
      <div class="row_input" :class="{visible_input: isBalanceAll}">
        <input v-model="balanceAllNew" type="number"/>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/save.svg" alt="" @click="isBalanceAll=false;changeB('balanceAll', balanceAllNew)">
        </ButtonWarehouse>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/remove.svg" alt="" @click="isBalanceAll=false;">
        </ButtonWarehouse>
      </div>

      <span @click="isBalanceAll=true;">{{ props.sizeList.balanceAll }} шт.</span>
    </div>
    <div class="row_item">1 день</div>
    <div class="row_item">
      <div class="row_input" :class="{visible_input: isOnWayManufacturer}">
        <input v-model="onWayManufacturerNew" type="number"/>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/save.svg" alt="" @click="isOnWayManufacturer=false;changeB('onWayManufacturer',onWayManufacturerNew)">
        </ButtonWarehouse>
        <ButtonWarehouse :class_setting="listClassButton.BUT_SAVE_REMOVE">
          <img src="public/icons/remove.svg" alt="" @click="isOnWayManufacturer=false;">
        </ButtonWarehouse>
      </div>

      <span @click="isOnWayManufacturer=true;">{{ props.sizeList.onWayManufacturer }} шт.</span>
    </div>
    <div class="row_item">5 шт./день</div>
    <div class="row_item_last">
      <ButtonWarehouse :class_setting="listClassButton.BUT_LOOK">
        <span>Посмотреть</span>
      </ButtonWarehouse>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  background: rgba(255, 255, 255, 1);
  padding: 15px;
  margin: 1px;
}
.row_item {
  position: relative;
}
.row_item span {
  color: rgba(80, 104, 165, 1);
  cursor: pointer;
}
.row_input {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
}
.row_input input {
  color: rgba(80, 104, 165, 1);
  text-decoration: none;
  border: none;
  appearance: none;
  width: 45px;
}
.row_input input:focus {
  outline: none;
  scale: none;
}
.row_input button img {
  width: 15px;
  height: 15px;
  margin: 2px;
}

.row_item_first {
  width: 72px;
  height: 24px;
  background: rgba(234, 93, 187, 1);
  color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.row_item_last button span {
  color: rgba(255, 255, 255, 1);
}

.visible_input {
  display: flex;
  z-index: 10;
}
</style>