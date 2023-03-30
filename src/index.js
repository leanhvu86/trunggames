import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Games from "./components/games/Games";
import TopSale from "./components/top-sale/TopSale";
import UserGuide from "./components/user-guide/UserGuide";
import AboutUs from "./components/about-us/about-us";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/games" element={<Games />} />
                <Route path="/top-sale" element={<TopSale />} />
                <Route path="/user-guide" element={<UserGuide />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
