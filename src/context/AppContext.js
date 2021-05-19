import { useState } from 'react';
import { CounterContext } from './CounterContext';
import { FullStackExample } from './FullStackExample';
import { RegularExample } from './RegularExample';

export const AppContext = () => {
    const [showFullStack, setShowFullStack] = useState(false);

    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    const increment = () => {
        setNumberOfClicks(numberOfClicks + 1);
    }

    const reset = () => {
        setNumberOfClicks(0);
    }

    return (
        <CounterContext.Provider value={{ numberOfClicks, increment, reset, incrementBy, setIncrementBy }}>
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