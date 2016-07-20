var _list = () => {
    return fetch('https://randomuser.me/api/?results=20').then((res) => {
        return res.json();
    }).then((data) => {
        return data.results;
    });
};

export default class Users {
    appState;

    constructor(appState){
        this.appState = appState;
    }

    list(){
        this.appState.loading = true;
        _list().then((users) => {
            this.appState.users = users;
            this.appState.loading = false;
        }).catch(() => {
            this.appState.loading = false;
        });
    }
};