import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    load,
    increment,
    reset,
} from './thunks';

export const FullStackExample = () => {
    const numberOfClicks = useSelector(state => state.numberOfClicks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load());
    }, [dispatch]);

    return (
        <div className="counter-container">
            <label>
                Increment by:
                <input type="number" />
            </label>
            <div className="counter-text">You've clicked the button {numberOfClicks} times</div>
            <button onClick={() => dispatch(increment(1))} className="counter-button">Click here</button>
            <button onClick={() => dispatch(reset())} className="reset-button">Reset Count</button>
        </div>
    );
}