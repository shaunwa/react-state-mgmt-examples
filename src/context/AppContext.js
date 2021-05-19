import { useState } from 'react';
import { CounterContext } from './CounterContext';
import { FullStackExample } from './FullStackExample';
import { RegularExample } from './RegularExample';

export const AppContext = () => {
    const [showFullStack, setShowFullStack] = useState(false);

    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const increment = (amount) => {
        setNumberOfClicks(numberOfClicks + amount);
    }

    const reset = () => {
        setNumberOfClicks(0);
    }

    return (
        <CounterContext.Provider value={{ numberOfClicks, increment, reset }}>
            <div className="page-container">
                <button
                    disabled={!showFullStack}
                    onClick={() => setShowFullStack(false)}
                >Show Regular Example</button>
                <button
                    disabled={showFullStack}
                    onClick={() => setShowFullStack(true)}
                >Show Full-stack Example</button>
                {showFullStack ? <FullStackExample /> : <RegularExample />}
            </div>
        </CounterContext.Provider>
    );
}