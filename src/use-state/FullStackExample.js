import { useState, useEffect } from 'react';
import axios from 'axios';

export const FullStackExample = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);
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

    const increment = async () => {
        setNumberOfClicks(numberOfClicks + 1);
    }

    const reset = async () => {
        setNumberOfClicks(0);
    }

    return isLoading ? <p>Loading...</p> : (
        <div className="counter-container">
            <label>
                Increment by:
                <input
                    type="number"
                    value={incrementBy}
                    onChange={e => setIncrementBy(Number(e.target.value))} />
            </label>
            <div className="counter-text">You've clicked the button {numberOfClicks} times</div>
            <button
                onClick={increment}
                className="counter-button"
            >Click here</button>
            <button
                onClick={reset}
                className="reset-button"
            >Reset Count</button>
        </div>
    );
}