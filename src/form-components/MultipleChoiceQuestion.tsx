import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {

    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <select
                value={selectedChoice}
                onChange={(e) => {setSelectedChoice(e.target.value)}}
                >
                {options.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
                </select>
                <span>
                {isCorrect ? "✔️" : "❌"}
                </span>
            </div>
        </div>
    );
}
