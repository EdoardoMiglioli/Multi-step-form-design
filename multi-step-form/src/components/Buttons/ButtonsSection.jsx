import React from "react";
import BackButton from "./BackBotton";
import NextButton from "./NextButton";
import ConfirmButton from "./ConfirmButton";

const ButtonsSection = ({ currentStep, handleNext, handlePrev }) => {

    return(
        <div className="mobile-buttons-container">
            {(currentStep > 1) ? <BackButton handlePrev={handlePrev}  /> : null}
            {(currentStep < 4) ? <NextButton handleNext={handleNext} /> : <ConfirmButton />}
        </div>
    );
}

export default ButtonsSection;
