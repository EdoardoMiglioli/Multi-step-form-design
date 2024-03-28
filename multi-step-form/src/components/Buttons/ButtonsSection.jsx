import React from "react";
import BackButton from "./BackBotton";
import NextButton from "./NextButton";
import ConfirmButton from "./ConfirmButton";

const ButtonsSection = ({ currentStep, handleNext, handlePrev }) => {

    return(
        <div className="mobile-buttons-container">
            {(currentStep > 1 && currentStep < 5) ? <BackButton handlePrev={handlePrev}  /> : null}
            {(currentStep < 4) ? <NextButton handleNext={handleNext} /> : ((currentStep == 4) ? <ConfirmButton handleNext={handleNext} /> : null)}
        </div>
    );
}

export default ButtonsSection;
