import { observable } from 'mobx';

const AppState = {
    query:"",
    loading: false,
    users:[],
    get numberOfUsers() {
        return this.users.length;
    },
    get males() {
        return this.users.filter(user => user.gender === 'male');
    },
    get females() {
        return this.users.filter(user => user.gender !== 'male');
    }
};

export default observable(AppState);