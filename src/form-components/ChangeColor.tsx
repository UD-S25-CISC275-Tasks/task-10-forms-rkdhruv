import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "teal",
        "brown",
        "black"
    ];
    
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    
    return (
        <div>
        <h3>Change Color</h3>
        
        <div>
            {colors.map((color) => (
            <label 
                key={color} 
                style={{ 
                marginRight: "10px",
                color: color,
                fontWeight: selectedColor === color ? "bold" : "normal"
                }}
            >
                <input
                type="radio"
                name="colorChoice"
                value={color}
                checked={selectedColor === color}
                onChange={() => {setSelectedColor(color)}}
                />
                {" "}{color}
            </label>
            ))}
        </div>
        
        <div
            data-testid="colored-box"
            style={{
            backgroundColor: selectedColor,
            padding: "20px",
            marginTop: "10px",
            display: "inline-block",
            color: ["yellow", "pink", "orange"].includes(selectedColor) ? "black" : "white"
            }}
        >
            {"You picked "}{selectedColor}
        </div>
        </div>
    );
}