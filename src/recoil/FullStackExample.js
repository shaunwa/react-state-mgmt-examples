import { useRecoilState } from 'recoil';
import { incrementByState } from './incrementByState';
import { useServerCount } from './useServerCount';

export const FullStackExample = () => {
    const [numberOfClicks, increment, reset] = useServerCount();
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
            <button
                onClick={() => increment(incrementBy)}
                className="counter-button"
            >Click here</button>
            <button
                onClick={reset}
                className="reset-button"
            >Reset Count</button>
        </div>
    );;
}