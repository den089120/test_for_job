
export interface typeSizeItem {
    id: string;
    size: string;
    balanceInWB: number;
    balanceInTheSupplier: number;
    balanceInMyWarehouse:  number;
    balanceAll:  number;
    onWayManufacturer: number;
}
export interface WarehouseItem {
    id: string;
    name1: string;
    name2: string;
    Article: string;
    imagePath: string;
    speedOfOrders: number;
    sizeList: Array<typeSizeItem>;
}

export interface TypeMyWarehouseStore {
    warehouseList: Array<WarehouseItem>;
    changeBalance: (idWarehouseItem: string, idSizeItem: string, nameBalance: string, valueNew: string) => void;
    changeSpeed: (idWarehouseItem: string, speed: number) => void;
}