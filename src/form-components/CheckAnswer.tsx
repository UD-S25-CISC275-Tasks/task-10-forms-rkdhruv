import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {

    const [givenAnswer, setGivenAnswer] = useState("");
    const isCorrect = givenAnswer === expectedAnswer;

    return (
    <div>
        <h3>Check Answer</h3>
        <div>
            <input
            type="text"
            value={givenAnswer}
            onChange={(e) => {setGivenAnswer(e.target.value)}}
            placeholder="Enter your answer"
            />
            <span>
            {isCorrect ? "✔️" : "❌"}
            </span>
        </div>
        </div>
    );
}
