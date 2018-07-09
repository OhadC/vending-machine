import * as serverAPI from '../ServerAPI/serverAPI';
import * as actionTypes from "./actionTypes";


export function buyProduct(productCode: string) {
    return async (dispatch: any, getState: any) => {
        const {budget} = getState();
        const result = await serverAPI.buyProduct(productCode, budget);
        if (result.status === 'error') {
            alert(result.message);
            return;
        }
        const product = result.data;
        dispatch({type: actionTypes.DEC_BUDGET, payload: {amount: product.price}});
    };
}