import {
    INCREMENT,
    RESET,
    LOADED,
} from './actions';

export const numberOfClicks = (state = 0, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOADED: {
            const { count } = payload;
            return count;
        }
        case INCREMENT: {
            const { amount } = payload;
            return state + amount;
        }
        case RESET: {
            return 0;
        }
        default:
            return state;
    }
}