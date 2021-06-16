import { useState, useEffect } from 'react';

export const useLocalStoragePersist = (key, defaultValue) => {
    const [value, setValue] = useState(localStorage.getItem(key) || defaultValue);

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}