import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    SELECT_ALL,
    DESELECT_ALL,
    SELECT,
    DESELECT,
    LOAD_DATA,
    FILTER_GAME,
    VIEW_GAME,
    CHECK_LOAD_DATA,
    SET_PACKAGE_VIEW,
    REMOVE_PACKAGE_VIEW, FILTER_PACKAGE, SET_PACKAGE, VIEW_TOP_SALE
} from '../constants/action-types/cart-actions';
import {LOGIN_SUCCESS, LOG_OUT, UPDATE_USER} from '../constants/action-types/user-actions';

const initState = {
    packages: [],
    filterPackages: [],
    allPackages: [],
    addedItems: [],
    total: 0,
    package: 0,
    packageView: {},
    packageCount: 0,
    checkoutAll: false,
    user: {},
    gameList: [],
    listGame: [],
    topGames: [],
    newGames: [],
    banners: [],
    blogs: [],
    newPackage: [],
    topSale: [],
    bestSale: [],
    loadData: '',
    reloadCache: false,
    token: '',
    currency: 'VND',
    language: 'en',
    game: {},
    server: []

};

const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = action.id;

        // console.log(addedItem);
        //calculating the total
        let newTotal = state.total + addedItem.amount;
        let newPackageCount = state.packageCount + 1;

        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal,
            packageCount: newPackageCount
        };
    }
    if (action.type === CHECK_LOAD_DATA) {
        let currDate = new Date();
        let date = new Date(state.loadData);
        let diffMs = currDate - date; // milliseconds between now & Christmas
        let diffDays = Math.floor(diffMs / 86400000); // days
        let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        // console.log(diffDays + ' days, ' + diffHrs + ' hours, ' + diffMins + ' minutes until Christmas =)');

        if (diffDays > 0 || diffHrs > 0 || diffMins > 30) {
            return {
                ...state,
                user: {},
                token: '',
                reloadCache: true
            };
        } else {
            return {
                ...state,
                reloadCache: false
            };
        }
    }
    if (action.type === LOAD_DATA) {
        console.log('Load cache');
        let addedItem = action.data;
        let currDate = new Date();
        let topGames = [];
        let count = 0;
        console.log(addedItem)
        addedItem.listGame.forEach((game) => {
            if (game.gamePriority === '2' && count !== 5) {
                topGames.push(game);
                count++;
            }
        });
        // 1-hot, 2-top, 3- new,
        return {
            ...state,
            listGame: addedItem.listGame,
            gameList: addedItem.listGame,
            banners: addedItem.banners,
            newGames: addedItem.newGames,
            newPackage: addedItem.newPackage,
            topSale: addedItem.topSale,
            blogs: addedItem.posts,
            bestSale: addedItem.bestSale,
            allPackages:addedItem.packages,
            topGames: topGames,
            loadData: currDate,
            reloadCache: false
        };
    }
    if (action.type === FILTER_GAME) {
        let list = action.data;
        // console.log(list);
        return {
            ...state,
            gameList: list
        };
    }
    if (action.type === FILTER_PACKAGE) {
        let list = action.data;
        // console.log(list);
        return {
            ...state,
            filterPackages: list
        };
    }
    if (action.type === VIEW_TOP_SALE) {
        // console.log(list);
        return {
            ...state,
            packages: state.topSale,
            filterPackages: state.topSale
        };
    }
    if (action.type === VIEW_GAME) {
        let game = action.data;
        // console.log(game);
        return {
            ...state,
            game: game,
            packages: game.gamePackages,
            filterPackages: game.gamePackages,
            server: game.server
        };
    }
    if (action.type === SET_PACKAGE_VIEW) {
        let packageId = action.data;
        console.log(packageId);
        return {
            ...state,
            package: packageId
        };
    }
    if (action.type === SET_PACKAGE) {
        let packageView = action.data;
        // console.log(packageId);
        return {
            ...state,
            packageView: packageView
        };
    }
    if (action.type === REMOVE_PACKAGE_VIEW) {
        return {
            ...state,
            package: 0
        };
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find((item) => action.id === item.packageId);
        let new_items = state.addedItems.filter((item) => action.id !== item.packageId);
        // console.log('remove_item', action.id);
        //calculating the total
        let newTotal = state.total - itemToRemove.amount;
        let newPackageCount = state.packageCount - 1;
        // console.log(itemToRemove);
        return {
            ...state,
            addedItems: new_items,
            total: newTotal,
            packageCount: newPackageCount
        };
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        // console.log('ADD_QUANTITY', action.id);

        let addedItem = state.addedItems.find((item) => item.packageId === action.id);
        addedItem.quantity += 1;
        addedItem.amount += addedItem.price;
        let newTotal = state.total + addedItem.amount;
        return {
            ...state,
            total: newTotal
        };
    }
    if (action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            user: action['user'],
            token: action['user'].token,
            reloadCache: true
        };
    }
    if (action.type === LOG_OUT) {
        localStorage.setItem('servicesToken', '');

        return {
            ...state,
            user: {},
            token: ''
        };
    }
    if (action.type === SELECT_ALL) {
        let newItem = state.addedItems;
        newItem.forEach((item) => (item.checkout = true));
        // console.log(newItem);
        return {
            ...state,
            addedItems: newItem,
            checkoutAll: true
        };
    }
    if (action.type === SELECT) {
        let newItem = state.addedItems;
        let checkAll = 0;
        newItem.forEach((item) => {
            if (item.packageId === action.id) {
                item.checkout = true;
            }
            if (item.checkout === true) {
                checkAll += 1;
            }
        });
        let selectAll = false;
        if (checkAll === state.addedItems.length) selectAll = true;
        return {
            ...state,
            addedItems: newItem,
            checkoutAll: selectAll
        };
    }
    if (action.type === DESELECT) {
        let newItem = state.addedItems;
        newItem.forEach((item) => {
            if (item.packageId === action.id) {
                item.checkout = false;
            }
        });
        return {
            ...state,
            addedItems: newItem,
            checkoutAll: false
        };
    }

    if (action.type === DESELECT_ALL) {
        let newItem = state.addedItems;
        newItem.forEach((item) => (item.checkout = false));
        // console.log(newItem);
        return {
            ...state,
            addedItems: newItem,
            checkoutAll: false
        };
    }
    if (action.type === SUB_QUANTITY) {
        // console.log('SUB_QUANTITY', action.id);

        let addedItem = state.addedItems.find((item) => item.packageId === action.id);
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter((item) => item.packageId !== action.id);
            let newTotal = state.total - 1;
            let newPackageCount = state.packageCount - 1;
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                packageCount: newPackageCount
            };
        } else {
            addedItem.quantity -= 1;
            addedItem.amount = addedItem.amount - addedItem.price;
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                total: newTotal
            };
        }
    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        };
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 6
        };
    }

    // CHANGE APP LANGUAGE
    if (action.type === 'UPDATE_LOCALE') {
        return {...state, language: action.payload};
    }
    return state;
};

export default cartReducer;
