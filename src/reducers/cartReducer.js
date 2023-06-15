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
  VIEW_GAME
} from '../constants/action-types/cart-actions';
import { LOGIN_SUCCESS, LOG_OUT, UPDATE_USER } from '../constants/action-types/user-actions';

const initState = {
  packages: [],
  addedItems: [],
  total: 0,
  package: {},
  packageCount: 0,
  checkoutAll: false,
  user: {
    id: 1,
    name: 'Ace Racer',
    email: 'efpyi@example.com',
    password: '123456',
    phone: '0987654321'
  },
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
  game: {}
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = action.id;

    console.log(addedItem)
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
    console.log(currDate);
    console.log(state.loadData);
    let diffMs = (currDate - state.loadData); // milliseconds between now & Christmas
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas =)");

    let topGames = [];
    let count = 0;
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
      topGames: topGames,
      loadData: currDate
    };
  }
  if (action.type === FILTER_GAME) {
    let list = action.data;
    console.log(list);
    return {
      ...state,
      gameList: list
    };
  }
  if (action.type === VIEW_GAME) {
    let game = action.data;
    console.log(game);
    return {
      ...state,
      game: game
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
    return { ...state, language: action.payload };
  }
  return state;
};

export default cartReducer;
