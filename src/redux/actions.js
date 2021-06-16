export const INCREMENT = 'INCREMENT';
export const increment = (amount) => ({
    type: INCREMENT,
    payload: { amount },
});

export const RESET = 'RESET';
export const reset = () => ({
    type: RESET,
});

export const LOADED = 'LOADED';
export const loaded = (count) => ({
    type: LOADED,
    payload: { count },
});