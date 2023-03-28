import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                {/*<Route path="/ict" element={<ICT />} />*/}
                {/*<Route path="/psd" element={<PSD />} />*/}
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
