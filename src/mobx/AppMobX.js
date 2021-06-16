import { useState } from 'react';
import { FullStackExample } from './FullStackExample';
import { RegularExample } from './RegularExample';
import { Counter } from './Counter';
import { CounterAsync } from './CounterAsync';

const counter = new Counter();
const counterAsync = new CounterAsync();

export const AppMobX = () => {
    const [showFullStack, setShowFullStack] = useState(false);

    counterAsync.load();

    return (
        <div className="page-container">
            <button
                disabled={!showFullStack}
                onClick={() => setShowFullStack(false)}
            >Show Regular Example</button>
            <button
                disabled={showFullStack}
                onClick={() => setShowFullStack(true)}
            >Show Full-stack Example</button>
            {showFullStack ? <FullStackExample counter={counterAsync} /> : <RegularExample counter={counter} />}
        </div>
    );
}