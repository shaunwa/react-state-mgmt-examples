import { FullStackExample } from './FullStackExample';
import { RegularExample } from './RegularExample';
import { useLocalStoragePersist } from './useLocalStoragePersist';

export const AppUseState = () => {
    const [showFullStack, setShowFullStack] = useLocalStoragePersist('showFullStack', false);

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