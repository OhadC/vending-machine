import store from "../Store/Store";
import * as actionTypes from '../Store/actionTypes';

const BASE_URL = 'http://localhost:4000';

export async function init() {
    try {
        const inventoryReq = await fetch(`${BASE_URL}/product`);
        const inventory = await inventoryReq.json();
        console.log(inventory.data);
        store.dispatch({type: actionTypes.SET_INVENTORY, payload: {inventory: inventory.data}});
    } catch (e) {
        console.log(e)
    }
}

export async function buyProduct(productCode: String) {
    try {
        console.log(productCode);
        const buyReq = await fetch(`${BASE_URL}/product/:${productCode}`);
        const isBuy = await buyReq.json();
        console.log(isBuy);
    } catch (e) {
        console.log(e.message);
    }
}