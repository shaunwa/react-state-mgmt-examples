import { useState } from 'react';
import { FullStackExample } from './FullStackExample';
import { RegularExample } from './RegularExample';

export const AppRedux = () => {
    const [showFullStack, setShowFullStack] = useState(false);

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
            {showFullStack ? <FullStackExample /> : <RegularExample />}
        </div>
    );
}