import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    SELECT_ALL,
    DESELECT_ALL,
    SELECT,
    DESELECT, LOAD_DATA, FILTER_GAME, VIEW_GAME
} from '../constants/action-types/cart-actions';
import {LOGIN_SUCCESS, LOG_OUT, UPDATE_USER} from '../constants/action-types/user-actions';

const initState = {
    packages: [
        {
            id: 1,
            name: 'Ace Racer Top Up 60+5 Tokens, only need User ID & Server.\n',
            price: 19442,
            unit: '65',
            rating: 5,
            topSale: true,
            server: [
                {
                    serverId: 1,
                    packageId: 1,
                    name: 'asia',
                    parentId: 0
                },
                {
                    serverId: 2,
                    packageId: 1,
                    name: 'korea',
                    parentId: 1
                },
                {
                    serverId: 3,
                    packageId: 1,
                    name: 'china',
                    parentId: 1
                },
                {
                    serverId: 4,
                    packageId: 1,
                    name: 'vietnam',
                    parentId: 1
                },
                {
                    serverId: 5,
                    packageId: 1,
                    name: 'europe',
                    parentId: 0
                },
                {
                    serverId: 6,
                    packageId: 1,
                    name: 'france',
                    parentId: 5
                },
                {
                    serverId: 7,
                    packageId: 1,
                    name: 'england',
                    parentId: 5
                }
            ],
            attribute: 'tokens',
            warehouseQuantity: 895,
            tradeCount: 100,
            imageId:
                'http://52.41.255.157:8080/trunggame-0.0.1/api/file/2e89d21a-56a8-42fa-a412-945ca039dae8-Screenshot 2023-04-16 at 22.34.45.png',
            descriptionVi: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            descriptionEn: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            deliveryTime: 10
        },
        {
            id: 2,
            name: 'Ace Racer Top Up 1180+120 Tokens, only need User ID & Server.',
            price: 19152,
            unit: '65',
            rating: 5,
            topSale: true,
            server: [
                {
                    serverId: 1,
                    packageId: 1,
                    name: 'asia',
                    parentId: 0
                },
                {
                    serverId: 2,
                    packageId: 1,
                    name: 'korea',
                    parentId: 1
                },
                {
                    serverId: 3,
                    packageId: 1,
                    name: 'china',
                    parentId: 1
                },
                {
                    serverId: 4,
                    packageId: 1,
                    name: 'vietnam',
                    parentId: 1
                },
                {
                    serverId: 5,
                    packageId: 1,
                    name: 'europe',
                    parentId: 0
                },
                {
                    serverId: 6,
                    packageId: 1,
                    name: 'france',
                    parentId: 5
                },
                {
                    serverId: 7,
                    packageId: 1,
                    name: 'england',
                    parentId: 5
                }
            ],
            warehouseQuantity: 895,
            tradeCount: 15,
            imageId:
                'http://52.41.255.157:8080/trunggame-0.0.1/api/file/4cb1f4f3-9a89-4b20-82a8-75f1df0add43-Screenshot 2023-04-16 at 22.34.31.png',
            descriptionVi: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            descriptionEn: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            deliveryTime: 10
        },
        {
            id: 3,
            name: 'Ace Racer Top Up 250+20 Tokens, only need User ID & Server.',
            price: 315780,
            unit: '650',
            rating: 5,
            topSale: false,
            server: [
                {
                    serverId: 1,
                    packageId: 1,
                    name: 'asia',
                    parentId: 0
                },
                {
                    serverId: 2,
                    packageId: 1,
                    name: 'korea',
                    parentId: 1
                },
                {
                    serverId: 3,
                    packageId: 1,
                    name: 'china',
                    parentId: 1
                },
                {
                    serverId: 4,
                    packageId: 1,
                    name: 'vietnam',
                    parentId: 1
                },
                {
                    serverId: 5,
                    packageId: 1,
                    name: 'europe',
                    parentId: 0
                },
                {
                    serverId: 6,
                    packageId: 1,
                    name: 'france',
                    parentId: 5
                },
                {
                    serverId: 7,
                    packageId: 1,
                    name: 'england',
                    parentId: 5
                }
            ],
            warehouseQuantity: 895,
            tradeCount: 13,
            imageId:
                'http://52.41.255.157:8080/trunggame-0.0.1/api/file/4cb1f4f3-9a89-4b20-82a8-75f1df0add43-Screenshot 2023-04-16 at 22.34.31.png',
            descriptionVi: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            descriptionEn: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            deliveryTime: 10
        },
        {
            id: 3,
            name: 'Ace Racer Top Up 680+60 Tokens, only need User ID & Server.',
            price: 77897,
            unit: '565',
            rating: 5,
            topSale: true,
            server: [
                {
                    serverId: 1,
                    packageId: 1,
                    name: 'asia',
                    parentId: 0
                },
                {
                    serverId: 2,
                    packageId: 1,
                    name: 'korea',
                    parentId: 1
                },
                {
                    serverId: 3,
                    packageId: 1,
                    name: 'china',
                    parentId: 1
                },
                {
                    serverId: 4,
                    packageId: 1,
                    name: 'vietnam',
                    parentId: 1
                },
                {
                    serverId: 5,
                    packageId: 1,
                    name: 'europe',
                    parentId: 0
                },
                {
                    serverId: 6,
                    packageId: 1,
                    name: 'france',
                    parentId: 5
                },
                {
                    serverId: 7,
                    packageId: 1,
                    name: 'england',
                    parentId: 5
                }
            ],
            warehouseQuantity: 895,
            tradeCount: 1,
            imageId:
                'http://52.41.255.157:8080/trunggame-0.0.1/api/file/4cb1f4f3-9a89-4b20-82a8-75f1df0add43-Screenshot 2023-04-16 at 22.34.31.png',
            descriptionVi: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            descriptionEn: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            deliveryTime: 10
        },
        {
            id: 5,
            name: 'Ace Racer Top Up 2880+300 Tokens, only need User ID & Server.',
            price: 195281,
            unit: '6',
            rating: 5,
            topSale: false,
            server: [
                {
                    serverId: 1,
                    packageId: 1,
                    name: 'asia',
                    parentId: 0
                },
                {
                    serverId: 2,
                    packageId: 1,
                    name: 'korea',
                    parentId: 1
                },
                {
                    serverId: 3,
                    packageId: 1,
                    name: 'china',
                    parentId: 1
                },
                {
                    serverId: 4,
                    packageId: 1,
                    name: 'vietnam',
                    parentId: 1
                },
                {
                    serverId: 5,
                    packageId: 1,
                    name: 'europe',
                    parentId: 0
                },
                {
                    serverId: 6,
                    packageId: 1,
                    name: 'france',
                    parentId: 5
                },
                {
                    serverId: 7,
                    packageId: 1,
                    name: 'england',
                    parentId: 5
                }
            ],
            warehouseQuantity: 895,
            tradeCount: 1,
            imageId:
                'http://52.41.255.157:8080/trunggame-0.0.1/api/file/4cb1f4f3-9a89-4b20-82a8-75f1df0add43-Screenshot 2023-04-16 at 22.34.31.png',
            descriptionVi: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            descriptionEn: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            deliveryTime: 10
        },
        {
            id: 6,
            name: 'Ace Racer Top Up 5880+650 Tokens, only need User ID & Server.',
            price: 896143,
            unit: '1',
            rating: 5,
            topSale: true,
            server: [
                {
                    serverId: 1,
                    packageId: 1,
                    name: 'asia',
                    parentId: 0
                },
                {
                    serverId: 2,
                    packageId: 1,
                    name: 'korea',
                    parentId: 1
                },
                {
                    serverId: 3,
                    packageId: 1,
                    name: 'china',
                    parentId: 1
                },
                {
                    serverId: 4,
                    packageId: 1,
                    name: 'vietnam',
                    parentId: 1
                },
                {
                    serverId: 5,
                    packageId: 1,
                    name: 'europe',
                    parentId: 0
                },
                {
                    serverId: 6,
                    packageId: 1,
                    name: 'france',
                    parentId: 5
                },
                {
                    serverId: 7,
                    packageId: 1,
                    name: 'england',
                    parentId: 5
                }
            ],
            warehouseQuantity: 895,
            tradeCount: 1,
            imageId:
                'http://52.41.255.157:8080/trunggame-0.0.1/api/file/4cb1f4f3-9a89-4b20-82a8-75f1df0add43-Screenshot 2023-04-16 at 22.34.31.png',
            descriptionVi: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            descriptionEn: `<p>- Please double confirm your User ID &amp; Server<br />- For Top Up, No Login Account or Password is Needed<br />- Once the top up is done, you will receive the Tokens immediately.</p>`,
            deliveryTime: 10
        }
    ],
    addedItems: [],
    total: 0,
    package:{},
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
    token: '',
    currency: 'S',
    language: 'en',
    game:{}
};

const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = action.id;

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
    if (action.type === LOAD_DATA) {
        let addedItem = action.data;
        console.log(addedItem);
        let currDate = new Date();
        let hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
        let topGames = [];
        let count =0;
        addedItem.listGame.forEach(game => {
            if (game.gamePriority === "2"&&count!==5) {
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
            topGames: topGames,
            loadData: hoursMin
        };
    }
    if (action.type === FILTER_GAME) {
        let list = action.data;
        console.log(list);
        return {
            ...state,
            gameList: list,
        };
    }
    if (action.type === VIEW_GAME) {
        let game = action.data;
        console.log(game);
        return {
            ...state,
            game: game,
        };
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find((item) => action.id === item.packageId);
        let new_items = state.addedItems.filter((item) => action.id !== item.packageId);
        console.log('remove_item', action.id);
        //calculating the total
        let newTotal = state.total - itemToRemove.amount;
        let newPackageCount = state.packageCount - 1;
        console.log(itemToRemove);
        return {
            ...state,
            addedItems: new_items,
            total: newTotal,
            packageCount: newPackageCount
        };
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        console.log('ADD_QUANTITY', action.id);

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
            token: action['user'].token
        };
    }
    if (action.type === LOG_OUT) {
        return {
            ...state,
            user: {},
            token: ''
        };
    }
    if (action.type === SELECT_ALL) {
        let newItem = state.addedItems;
        newItem.forEach((item) => (item.checkout = true));
        console.log(newItem);
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
        console.log(newItem);
        return {
            ...state,
            addedItems: newItem,
            checkoutAll: false
        };
    }
    if (action.type === SUB_QUANTITY) {
        console.log('SUB_QUANTITY', action.id);

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
