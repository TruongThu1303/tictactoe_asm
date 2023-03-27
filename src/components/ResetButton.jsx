import React from 'react';

import "../css/ResetButton.css";

export const ResetButton = ({ resetBoard }) => {
    return (
        <button className="reset-btn border-2 border-black-600 rounded-lg p-2 pt-10" onClick={resetBoard}>Reset</button>
    )
}
