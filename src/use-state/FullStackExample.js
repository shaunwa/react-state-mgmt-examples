import { useState, useEffect } from 'react';

export const FullStackExample = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    return (
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
                onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}
                className="counter-button"
            >Click here</button>
            <button
                onClick={() => setNumberOfClicks(0)}
                className="reset-button"
            >Reset Count</button>
        </div>
    );
}