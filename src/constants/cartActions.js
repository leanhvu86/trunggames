
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    SELECT_ALL,
    DESELECT_ALL,
    DESELECT, SELECT
} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
//select all
export const selectAll=(id)=>{
    return{
        type: SELECT_ALL,
        id
    }
}
//deselect all
export const deselectAll=(id)=>{
    return{
        type: DESELECT_ALL,
        id
    }
}
//select
export const select=(id)=>{
    return{
        type: SELECT,
        id
    }
}
//deselect
export const deselect=(id)=>{
    return{
        type: DESELECT,
        id
    }
}
