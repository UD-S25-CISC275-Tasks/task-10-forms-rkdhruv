import React, { useState } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD

function Doubler({value, setValue}: {value: number, setValue: (n: number) => void}): React.JSX.Element {
    return (
        <Button onClick={() => {
            setValue(value * 2);
        }}>
=======
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
>>>>>>> origin/task-forms
            Double
        </Button>
    );
}

<<<<<<< HEAD
function Halver({value, setValue}: {value: number, setValue: (n: number) => void}): React.JSX.Element {
    return (
        <Button onClick={() => {
            setValue(value * 0.5);
        }}>
=======
function Halver(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
>>>>>>> origin/task-forms
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
<<<<<<< HEAD
    const [value, setValue] = useState<number>(10);
    
=======
>>>>>>> origin/task-forms
    return (
        <div>
            <h3>Double Half</h3>
            <div>
<<<<<<< HEAD
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue}></Doubler>
            <Halver value={value} setValue={setValue}></Halver>
=======
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
>>>>>>> origin/task-forms
        </div>
    );
}
