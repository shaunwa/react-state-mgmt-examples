import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

export class CounterAsync {
    numberOfClicks = 0;

    constructor() {
        makeObservable(this, {
            numberOfClicks: observable,
            load: action,
            increment: action,
            reset: action.bound, // notice this
        });
    }

    load = async () => {
        const response = await axios.get('/count');
        const { count } = response.data;
        this.numberOfClicks = count;
    }

    increment = async () => {
        const response = await axios.put('/count/increment', { amount: 1 });
        const { count } = response.data;
        this.numberOfClicks = count;
    }

    reset = async () => {
        const response = await axios.put('/count/reset');
        const { count } = response.data;
        this.numberOfClicks = count;
    }
}