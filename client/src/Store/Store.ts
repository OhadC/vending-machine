import {Action, AnyAction, createStore, Dispatch, Unsubscribe} from "redux";

interface IState {
    inventory: Array<IProduct>
}

interface IProduct {
    _id: String;
    name: String;
    price: number;
}

export interface IStore {
    dispatch: Dispatch<Action | any>;
    getState(): IState;
    subscribe(listener: () => void): Unsubscribe;
}

const initialState: IState =  {
    inventory: []
};

const reducer = (state: IState, action: AnyAction): IState => {
    return state;
};

const store = createStore(reducer, initialState);

export default store;