export const RegularExample = () => {
    return (
        <div className="counter-container">
            <label>
                Increment by:
                <input type="number" />
            </label>
            <div className="counter-text">You've clicked the button x times</div>
            <button className="counter-button">Click here</button>
            <button className="reset-button">Reset Count</button>
        </div>
    );
}