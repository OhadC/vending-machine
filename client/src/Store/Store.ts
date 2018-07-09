import {Action, AnyAction, applyMiddleware, createStore, Dispatch, Unsubscribe} from "redux";
import * as actionTypes from './actionTypes';
import * as thunk from 'redux-thunk';

interface IState {
    inventory: Array<IProduct>
}

export interface IProduct {
    _id: String;
    name: String;
    price: number;
    code: String;
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
    switch (action.type) {
        case actionTypes.SET_INVENTORY:
            return {
                ...state,
                inventory: [...action.payload.inventory]
            }
    }
    return state;
};

const store = createStore(reducer, initialState, applyMiddleware(thunk.default));

export default store;