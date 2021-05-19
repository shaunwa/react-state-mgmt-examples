import { useState } from 'react';
import { CounterProvider } from './CounterProvider';
import { ContextExample } from './ContextExample';
import { FullStackCounterProvider } from './FullStackCounterProvider';

export const AppContext = () => {
    const [showFullStack, setShowFullStack] = useState(false);
    
    const ProviderComponent = showFullStack ? FullStackCounterProvider : CounterProvider;

    return (
        <ProviderComponent>
            <div className="page-container">
                <button
                    disabled={!showFullStack}
                    onClick={() => setShowFullStack(false)}
                >Show Regular Example</button>
                <button
                    disabled={showFullStack}
                    onClick={() => setShowFullStack(true)}
                >Show Full-stack Example</button>
                <ContextExample />
            </div>
        </ProviderComponent>
    );
}