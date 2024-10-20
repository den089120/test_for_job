// @ts-ignore
import {defineStore, computed} from "pinia"

import type {TypeMyWarehouseStore, WarehouseItem, typeSizeItem} from "./typesStore/typeMyWarehouseStore";

export const useMyWarehouseStore = defineStore('MyWarehouse', (): TypeMyWarehouseStore => {
    const warehouseList = ref([
        {
            id: '1',
            name1: 'Долговечный букет из 9 роз в коробке,',
            name2:'в подарок — вечные стабилизированные цветы',
            Article: 'Артикул WB : 9619790',
            imagePath: './images/flowers_1.svg',
            speedOfOrders: 5,
            sizeList: [
                {
                    id: '11',
                    size: '38',
                    balanceInWB: 41,
                    balanceInTheSupplier: 41,
                    balanceInMyWarehouse: 41,
                    balanceAll: 41,
                    onWayManufacturer: 244,

                },
                {
                    id: '22',
                    size: '42',
                    balanceInWB: 90,
                    balanceInTheSupplier: 90,
                    balanceInMyWarehouse: 90,
                    balanceAll: 90,
                    onWayManufacturer: 223,

                },
                {
                    id: '33',
                    size: '44',
                    balanceInWB: 114,
                    balanceInTheSupplier: 114,
                    balanceInMyWarehouse: 114,
                    balanceAll: 114,
                    onWayManufacturer: 176,

                },
                {
                    id: '44',
                    size: '46',
                    balanceInWB: 417,
                    balanceInTheSupplier: 417,
                    balanceInMyWarehouse: 417,
                    balanceAll: 417,
                    onWayManufacturer: 139,

                },
                {
                    id: '55',
                    size: '40',
                    balanceInWB: 490,
                    balanceInTheSupplier: 490,
                    balanceInMyWarehouse: 490,
                    balanceAll: 490,
                    onWayManufacturer: 24,

                },
            ]
        },
        {
            id: '2',
            name1: 'Долговечный букет из 9 роз в коробке,',
            name2:'в подарок — вечные стабилизированные цветы',
            Article: 'Артикул WB : 9619555',
            imagePath: './images/flowers_1.svg',
            speedOfOrders: 2,
            sizeList: [
                {
                    id: '11',
                    size: '38',
                    balanceInWB: 41,
                    balanceInTheSupplier: 41,
                    balanceInMyWarehouse: 41,
                    balanceAll: 41,
                    onWayManufacturer: 244,

                },
                {
                    id: '22',
                    size: '42',
                    balanceInWB: 90,
                    balanceInTheSupplier: 90,
                    balanceInMyWarehouse: 90,
                    balanceAll: 90,
                    onWayManufacturer: 223,

                },
                {
                    id: '33',
                    size: '44',
                    balanceInWB: 114,
                    balanceInTheSupplier: 114,
                    balanceInMyWarehouse: 114,
                    balanceAll: 114,
                    onWayManufacturer: 176,

                },
                {
                    id: '44',
                    size: '46',
                    balanceInWB: 417,
                    balanceInTheSupplier: 417,
                    balanceInMyWarehouse: 417,
                    balanceAll: 417,
                    onWayManufacturer: 139,

                },
                {
                    id: '55',
                    size: '40',
                    balanceInWB: 490,
                    balanceInTheSupplier: 490,
                    balanceInMyWarehouse: 490,
                    balanceAll: 490,
                    onWayManufacturer: 24,

                },
            ]
        },
        {
            id: '3',
            name1: 'Долговечный букет из 9 роз в коробке,',
            name2:'в подарок — вечные стабилизированные цветы',
            Article: 'Артикул WB : 9619666',
            imagePath: './images/flowers_1.svg',
            speedOfOrders: 4,
            sizeList: [
                {
                    id: '11',
                    size: '38',
                    balanceInWB: 41,
                    balanceInTheSupplier: 41,
                    balanceInMyWarehouse: 41,
                    balanceAll: 41,
                    onWayManufacturer: 244,

                },
                {
                    id: '22',
                    size: '42',
                    balanceInWB: 90,
                    balanceInTheSupplier: 90,
                    balanceInMyWarehouse: 90,
                    balanceAll: 90,
                    onWayManufacturer: 223,

                },
                {
                    id: '33',
                    size: '44',
                    balanceInWB: 114,
                    balanceInTheSupplier: 114,
                    balanceInMyWarehouse: 114,
                    balanceAll: 114,
                    onWayManufacturer: 176,

                },
                {
                    id: '44',
                    size: '46',
                    balanceInWB: 417,
                    balanceInTheSupplier: 417,
                    balanceInMyWarehouse: 417,
                    balanceAll: 417,
                    onWayManufacturer: 139,

                },
                {
                    id: '55',
                    size: '40',
                    balanceInWB: 490,
                    balanceInTheSupplier: 490,
                    balanceInMyWarehouse: 490,
                    balanceAll: 490,
                    onWayManufacturer: 24,

                },
            ]
        },
        {
            id: '4',
            name1: 'Долговечный букет из 9 роз в коробке,',
            name2:'в подарок — вечные стабилизированные цветы',
            Article: 'Артикул WB : 9619333',
            imagePath: './images/flowers_1.svg',
            speedOfOrders: 6,
            sizeList: [
                {
                    id: '11',
                    size: '38',
                    balanceInWB: 41,
                    balanceInTheSupplier: 41,
                    balanceInMyWarehouse: 41,
                    balanceAll: 41,
                    onWayManufacturer: 244,

                },
                {
                    id: '22',
                    size: '42',
                    balanceInWB: 90,
                    balanceInTheSupplier: 90,
                    balanceInMyWarehouse: 90,
                    balanceAll: 90,
                    onWayManufacturer: 223,

                },
                {
                    id: '33',
                    size: '44',
                    balanceInWB: 114,
                    balanceInTheSupplier: 114,
                    balanceInMyWarehouse: 114,
                    balanceAll: 114,
                    onWayManufacturer: 176,

                },
                {
                    id: '44',
                    size: '46',
                    balanceInWB: 417,
                    balanceInTheSupplier: 417,
                    balanceInMyWarehouse: 417,
                    balanceAll: 417,
                    onWayManufacturer: 139,

                },
                {
                    id: '55',
                    size: '40',
                    balanceInWB: 490,
                    balanceInTheSupplier: 490,
                    balanceInMyWarehouse: 490,
                    balanceAll: 490,
                    onWayManufacturer: 24,

                },
            ]
        },
    ])
    function changeBalance(idWarehouseItem: string, idSizeItem: string, nameBalance: string, valueNew: string) {
        if (warehouseList.value) {
            const item: Array<typeSizeItem> = warehouseList.value
                .filter((el: WarehouseItem) => el.id === idWarehouseItem)[0].sizeList
                .filter((elem: typeSizeItem) => elem.id === idSizeItem)

            // @ts-ignore
            if (item[0]) item[0][nameBalance] = parseInt(valueNew)

        }

    }
    function changeSpeed (idWarehouseItem: string, speed: number) {
        warehouseList.value.filter((el: WarehouseItem) => el.id === idWarehouseItem)[0].speedOfOrders = speed
    }

    return { warehouseList, changeBalance, changeSpeed }
})