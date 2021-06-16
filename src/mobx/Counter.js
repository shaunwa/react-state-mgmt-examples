import { makeObservable, observable, action } from 'mobx';

export class Counter {
    numberOfClicks = 0;

    constructor() {
        makeObservable(this, {
            numberOfClicks: observable,
            increment: action,
            reset: action.bound, // notice this
        });
    }

    increment = () => {
        this.numberOfClicks += 1;
    }

    reset() {
        this.numberOfClicks = 0;
    }
}