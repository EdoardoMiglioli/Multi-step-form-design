import React from "react";

const ConfirmButton = ({ handleNext }) => {
    return (
        <button className="confirm-button" onClick={handleNext}>Confirm</button>
    );
}

export default ConfirmButton;
