import { observable } from 'mobx';

export default class Counter {
    @observable value = 0;

    increment() {
        console.log('increment');
        this.value++;
        console.log(this.value);
    }
};