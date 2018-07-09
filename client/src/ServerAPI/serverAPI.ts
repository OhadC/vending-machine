
const BASE_URL = 'http://localhost:4000';

export async function init() {
    try {
        const inventoryReq = await fetch(`${BASE_URL}`);
        const inventory = await inventoryReq.json();
        console.log(inventory);
    } catch (e) {
        console.log(e.message)
    }
}