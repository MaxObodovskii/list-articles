import React, { FC } from 'react';

import { BrowserRouter as Router, HashRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";

import './App.css';

const App: FC = () => {
    return (
        <div className="myApp">
            <HashRouter>
                <AppRouter/>
            </HashRouter>
        </div>
    );
};

export default App;
