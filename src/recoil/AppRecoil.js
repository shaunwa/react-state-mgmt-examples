import { useState, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { FullStackExample } from './FullStackExample';
import { RegularExample } from './RegularExample';

export const AppRecoil = () => {
    const [showFullStack, setShowFullStack] = useState(false);

    return (
        <RecoilRoot>
            <div className="page-container">
                <button
                    disabled={!showFullStack}
                    onClick={() => setShowFullStack(false)}
                >Show Regular Example</button>
                <button
                    disabled={showFullStack}
                    onClick={() => setShowFullStack(true)}
                >Show Full-stack Example</button>
                <Suspense fallback={<p>Loading...</p>}>
                    {showFullStack ? <FullStackExample /> : <RegularExample />}
                </Suspense>
            </div>
        </RecoilRoot>
    );
}