import { useState } from 'react';
import { CounterContext } from './CounterContext';
import { CounterProvider } from './CounterProvider';
import { FullStackExample } from './FullStackExample';
import { RegularExample } from './RegularExample';

export const AppContext = () => {
    const [showFullStack, setShowFullStack] = useState(false);

    return (
        <CounterProvider>
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
        </CounterProvider>
    );
}