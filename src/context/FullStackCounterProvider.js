import { useState, useEffect } from 'react';
import axios from 'axios';
import { CounterContext } from './CounterContext';

export const FullStackCounterProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [isInitial, setIsInitial] = useState(true);

    useEffect(() => {
        const loadCount = async () => {
            const response = await axios.get('/count');
            const { count } = response.data;
            setNumberOfClicks(count);
            setIsLoading(false);
        }

        loadCount();
    }, []);

    useEffect(() => {
        const updateCount = async () => {
            await axios.put('/count', { count: numberOfClicks });
        }

        if (!isInitial) {
            updateCount();
        }

        setIsInitial(false);
    }, [isInitial, numberOfClicks]);

    const increment = amount => {
        setNumberOfClicks(numberOfClicks + amount);
    }

    const reset = () => {
        setNumberOfClicks(0);
    }

    return (
        <CounterContext.Provider value={{ numberOfClicks, isLoading, increment, reset }}>
            {children}
        </CounterContext.Provider>
    );
}