import * as serverAPI from '../ServerAPI/serverAPI';


export function buyProduct(productCode: String) {
    return async (dispatch: any) => {
        await serverAPI.buyProduct(productCode);
    };
}