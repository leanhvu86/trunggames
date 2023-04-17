import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Games from "./components/games/Games";
import TopSale from "./components/top-sale/TopSale";
import Blog from "./components/blog/Blog";
import AboutUs from "./components/about-us/AboutUs";
import GameDetail from "./components/games/game-detail/GameDetail";
import AuthenticateForm from "./components/user/AuthenticateForm";
import UserProfile from "./components/user/user-profile/UserProfile";
import cartReducer from './reducers/cartReducer';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {createStore} from 'redux';
import Cart from "./components/Cart";
import {PersistGate} from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);
let store = createStore(persistedReducer)

let persist = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/games" element={<Games/>}/>
                    <Route path="/top-sale" element={<TopSale/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/game-detail" element={<GameDetail/>}/>
                    <Route path="/login" element={<AuthenticateForm/>}/>
                    <Route path="/user-profile" element={<UserProfile/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
