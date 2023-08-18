import React, { FC } from 'react';

import { BrowserRouter as Router, HashRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";

const App: FC = () => {
    return (
        <HashRouter>
            <AppRouter/>
        </HashRouter>
    );
};

export default App;
