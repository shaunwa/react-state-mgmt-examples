import axios from 'axios';
import { loaded } from './actions';

export const load = () => {
    return async (dispatch) => {
        const response = await axios.get('/count');
        const { count } = response.data;
        dispatch(loaded(count));
    }
}

export const increment = (amount) => {
    return async (dispatch) => {
        const response = await axios.put('/count/increment', { amount });
        const { count } = response.data;
        dispatch(loaded(count));
    }
}

export const reset = () => {
    return async (dispatch) => {
        const response = await axios.put('/count/reset');
        const { count } = response.data;
        dispatch(loaded(count));
    }
}