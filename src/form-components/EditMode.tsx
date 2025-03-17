import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
        <h3>Edit Mode</h3>

        <div className="form-check form-switch">
            <input
            className="form-check-input"
            type="checkbox"
            role="checkbox"
            id="editModeSwitch"
            checked={isEditMode}
            onChange={() => {setIsEditMode(!isEditMode)}}
            />
            <label className="form-check-label" htmlFor="editModeSwitch">
            Edit Mode
            </label>
        </div>

        {isEditMode ? (
            <div>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name:</label>
                <input
                type="text"
                className="form-control"
                id="nameInput"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                />
            </div>
            
            <div className="form-check">
                <input
                className="form-check-input"
                type="checkbox"
                id="studentCheckbox"
                checked={isStudent}
                onChange={() => {setIsStudent(!isStudent)}}
                />
                <label className="form-check-label" htmlFor="studentCheckbox">
                Student
                </label>
            </div>
            </div>
        ) : (
            <div>
            <p>{name} is {isStudent ? "a student" : "not a student"}</p>
            </div>
        )}
        </div>
    );
}