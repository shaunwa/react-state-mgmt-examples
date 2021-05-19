import { useState, useContext } from 'react';
import { CounterContext } from './CounterContext';

export const RegularExample = () => {
    const { numberOfClicks, increment, reset } = useContext(CounterContext);
    const [incrementBy, setIncrementBy] = useState(1);

    return (
        <div className="counter-container">
            <label>
                Increment by:
                <input
                    value={incrementBy}
                    onChange={e => setIncrementBy(Number(e.target.value))}
                    type="number" />
            </label>
            <div className="counter-text">You've clicked the button {numberOfClicks} times</div>
            <button onClick={() => increment(incrementBy)} className="counter-button">Click here</button>
            <button onClick={reset} className="reset-button">Reset Count</button>
        </div>
    );
}