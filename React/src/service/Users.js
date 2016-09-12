var _list = (query) => {
    return fetch('https://randomuser.me/api/?results=20&seed=' + query).then((res) => {
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

    list(query){
        this.appState.loading = true;
        _list(query).then((users) => {
            this.appState.users = users;
            this.appState.loading = false;
        }).catch(() => {
            this.appState.loading = false;
        });
    }

    delete(index){
        this.appState.users.splice(index,1);
    }
};