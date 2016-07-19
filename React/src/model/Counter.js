import { observable, computed } from 'mobx';

export default class Counter {
    @observable value = 0;

    @computed get difference() {
        return 100 - this.value;
    }

    increment() {
        this.value++;
    }
};