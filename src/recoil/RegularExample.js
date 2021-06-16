import { useRecoilState } from 'recoil';
import { counterState } from './counterState';
import { incrementByState } from './incrementByState';

export const RegularExample = () => {
    const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
    const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

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
            <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)} className="counter-button">Click here</button>
            <button onClick={() => setNumberOfClicks(0)} className="reset-button">Reset Count</button>
        </div>
    );
}