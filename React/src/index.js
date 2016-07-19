import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import AppState from './model/AppState';
import Users from './service/Users';

const appState = new AppState();
const users = new Users(appState);

render(
    <App
        appState={appState}
        users={users}></App>,
    document.getElementById('root')
);