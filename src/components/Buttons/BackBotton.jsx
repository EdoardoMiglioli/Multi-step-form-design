import React from "react";

const BackButton = ({ handlePrev }) => {
    return (
        <button className="back-button" onClick={handlePrev}>Go Back</button>
    );
}

export default BackButton;
