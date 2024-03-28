import React from "react";
import BackButton from "./BackBotton";
import NextButton from "./NextButton";
import ConfirmButton from "./ConfirmButton";

const ButtonsSection = ({ formData, setDisplayErrorStep1, currentStep, handleNext, handlePrev }) => {

    const handleStep1Next = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone) {
            setDisplayErrorStep1(true);
          return
        }
        handleNext();
      };

    return(
        <div className="mobile-buttons-container">
            {(currentStep > 1 && currentStep < 5) ? <BackButton handlePrev={handlePrev}  /> : null}
            {(currentStep < 4) ? ((currentStep != 1) ? <NextButton handleNext={handleNext} /> : <NextButton handleNext={handleStep1Next} />) : ((currentStep == 4) ? <ConfirmButton handleNext={handleNext} /> : null)}
        </div>
    );
}

export default ButtonsSection;
