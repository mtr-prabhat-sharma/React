import { BUY_CHOC, BUY_ICE, buyicecream } from "../Actions/Actions";

const initialState = {
    ice_stock: 100,
    chocolate_stock: 500
}

export const purchaseReducer = (prevState = initialState, action) => {
    switch(action.type){
        case BUY_ICE:
            return {
                ...prevState,
                ice_stock: prevState.ice_stock - 1
            };
        case BUY_CHOC:
            return {
                ...prevState,
                chocolate_stock: prevState.chocolate_stock - 1
            }
            default:
                return prevState;
    }
}

// const procurementState = () => {
//     status: 'procured',

// }