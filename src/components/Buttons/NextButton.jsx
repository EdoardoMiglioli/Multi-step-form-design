import React from "react";

const NextButton = ({ handleNext }) => {
    return (
        <button className="next-button" onClick={handleNext}>Next Step</button>
    );
}

export default NextButton;
