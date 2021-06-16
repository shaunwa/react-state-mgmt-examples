import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export const createCounter = () => {
    return makeAutoObservable({
        isLoading: true,
        numberOfClicks: 0,
        async load() {
            const response = await axios.get('/count');
            const { count } = response.data;
            this.numberOfClicks = count;
            this.isLoading = false;
        },
        increment: function() {
            this.numberOfClicks += 1;
        },
        reset: function() {
            this.numberOfClicks = 0;
        },
    });
}