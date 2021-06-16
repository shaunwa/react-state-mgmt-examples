import { atom } from 'recoil';

export const incrementByState = atom({
    key: 'incrementBy',
    default: 1,
});