import { useState } from 'react';
import { CounterContext } from './CounterContext';

export const CounterProvider = ({ children }) => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const increment = amount => {
        setNumberOfClicks(numberOfClicks + amount);
    }

    const reset = () => {
        setNumberOfClicks(0);
    }

    return (
        <CounterContext.Provider value={{ numberOfClicks, increment, reset }}>
            {children}
        </CounterContext.Provider>
    );
}