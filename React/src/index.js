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
    console.log("males: " + appState.males.length);
    console.log("females: " + appState.females.length);
});

autorun(() => {
    users.list(appState.query);
});

render(
    <App
        state={appState}
        users={users}></App>,
    document.getElementById('root')
);
