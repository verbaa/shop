import * as types from './types';


const initialState = {
     cart: 0,
    selectItems: []
}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.ADD_CART:
            return { ...state, selectItems: [...state.selectItems, payload] }

        default:
            return state;
    }
}