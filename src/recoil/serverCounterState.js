import { atom, selector } from 'recoil';
import axios from 'axios';

const serverCounterStateBase = atom({
    key: 'serverCounterStateBase',
    default: null,
})

export const serverCounterState = selector({
    key: 'serverCounterState',
    get: async ({ get }) => {
        const numberOfClicks = get(serverCounterStateBase);

        if (numberOfClicks !== null) {
            return numberOfClicks;
        }

        const response = await axios.get('/count');
        const { count } = response.data;
        return count;
    },
    set: ({ set }, value) => {
        set(serverCounterStateBase, value);
    },
});