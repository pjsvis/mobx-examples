import { observable, computed } from 'mobx';

export default class AppState {
    @observable loading = false;
    @observable users = [];

    @computed get numberOfUsers() {
        return this.users.length;
    }
};