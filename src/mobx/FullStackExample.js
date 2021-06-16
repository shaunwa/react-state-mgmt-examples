import { observer } from 'mobx-react-lite';

export const FullStackExample = observer(({ counter }) => {
    return (
        <div className="counter-container">
            <label>
                Increment by:
                <input type="number" />
            </label>
            <div className="counter-text">You've clicked the button {counter.numberOfClicks} times</div>
            <button onClick={counter.increment} className="counter-button">Click here</button>
            <button onClick={counter.reset} className="reset-button">Reset Count</button>
        </div>
    );
});