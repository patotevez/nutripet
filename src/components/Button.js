import React from 'react';

import { useState } from "react";
import "./Button.css";

function Button({ children }) {
let [color, setColor] = useState("grey");

function handleClick() {
    setColor("grey");
}

return (
    <button
    style={{ backgroundColor: color }}
    onClick={handleClick}
    className="btn"
    >
    {children}
    </button>
);
}

export default Button;