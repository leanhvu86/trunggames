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
import Blog from "./components/blog/Blog";
import AboutUs from "./components/about-us/AboutUs";
import GameDetail from "./components/games/game-detail/GameDetail";
import AuthenticateForm from "./components/user/AuthenticateForm";
import UserProfile from "./components/user/user-profile/UserProfile";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/games" element={<Games />} />
                <Route path="/top-sale" element={<TopSale />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/game-detail" element={<GameDetail />} />
                <Route path="/login" element={<AuthenticateForm />} />
                <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
