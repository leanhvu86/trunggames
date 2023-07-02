import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import App from './App';
import Cart from './components/Cart';
import AboutUs from './components/about-us';
import Blog from './components/blog/Blog';
import Games from './components/games/Games';
import GameDetail from './components/games/game-detail/GameDetail';
import TopSale from './components/top-sale/TopSale';
import AuthenticateForm from './components/user/AuthenticateForm';
import UserProfile from './components/user/user-profile/UserProfile';
import './index.scss';
import LocalesProvider from './provider/Locales';
import cartReducer from './reducers/cartReducer';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListOrder from './components/listOrder/ListOrder';
import { OrderDetail } from './components/listOrder/OrderDetail';
import PackageDetail from "./components/games/package/PackageDetail";

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
export const store = createStore(persistedReducer, composeWithDevTools());

let persist = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <LocalesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/games" element={<Games />} />
            <Route path="/top-sale" element={<TopSale />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/game-detail" element={<GameDetail />} />
            <Route path="/package-detail" element={<PackageDetail />} />
            <Route path="/login" element={<AuthenticateForm />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/my-order" element={<ListOrder />} />
            <Route path="/my-order/:id" element={<OrderDetail />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </LocalesProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

