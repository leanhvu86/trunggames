import {
    LOAD_DATA,
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    SELECT_ALL,
    DESELECT_ALL,
    DESELECT, SELECT, FILTER_GAME, VIEW_GAME, CHECK_LOAD_DATA
} from './action-types/cart-actions'

//load data
export const rawData = (data) => {
    return {
        type: LOAD_DATA,
        data
    }
}
//check load data
export const checkLoadData = (data) => {
    return {
        type: CHECK_LOAD_DATA,
        data
    }
}
//filter game
export const filterGame = (data) => {
    return {
        type: FILTER_GAME,
        data
    }
}
//viewGame
export const viewGame = (data) => {
    return {
        type: VIEW_GAME,
        data
    }
}
//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}
//select all
export const selectAll = (id) => {
    return {
        type: SELECT_ALL,
        id
    }
}
//deselect all
export const deselectAll = (id) => {
    return {
        type: DESELECT_ALL,
        id
    }
}
//select
export const select = (id) => {
    return {
        type: SELECT,
        id
    }
}
//deselect
export const deselect = (id) => {
    return {
        type: DESELECT,
        id
    }
}
