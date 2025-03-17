import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {

    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempt = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    const handleGainAttempts = () => {
        const numAttempts = parseInt(requestedAttempts);
        if (!isNaN(numAttempts)) {
            setAttemptsLeft(attemptsLeft + numAttempts);
            }
        };

    return (
    <div>
        <h3>Give Attempts</h3>
        <p>Attempts left: {attemptsLeft}</p>
        <div>
            <input
            type="number"
            value={requestedAttempts}
            onChange={(e) => {setRequestedAttempts(e.target.value)}}
            />
            <button onClick={handleGainAttempts}>gain</button>
            <button 
            onClick={handleUseAttempt}
            disabled={attemptsLeft <= 0}
            >
            use
            </button>
        </div>
        </div>
    );

}
