import { observable, computed , extendObservable} from 'mobx';

const AppState = {
    query:"",
    loading: false,
    users:[],
    get numberOfUsers() {
        return this.users.length;
    }
};

export default observable(AppState);