import React from 'react';
import { render } from 'react-dom';
import { autorun } from 'mobx';

import App from './components/App';

import AppState from './model/AppState';
import Users from './service/Users';

const appState = new AppState();
const users = new Users(appState);

autorun(() => console.log("Total number of users: " + appState.numberOfUsers));

render(
    <App
        appState={appState}
        users={users}></App>,
    document.getElementById('root')
);