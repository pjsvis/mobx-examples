import React from 'react';
import { render } from 'react-dom';
import { autorun } from 'mobx';

import App from './components/App';

import appState from './model/AppState';
import Users from './service/Users';

const users = Users(appState);

autorun(() => {
    console.log("Total number of users: " + appState.numberOfUsers);
});

autorun(() => {
    users.list(appState.query);
});

render(
    <App
        appState={appState}
        users={users}></App>,
    document.getElementById('root')
);
