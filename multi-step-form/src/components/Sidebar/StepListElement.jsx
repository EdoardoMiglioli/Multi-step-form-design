import React from "react";

const StepListElement = ({ stepNumber, stepAction, currentStep }) => {
    const stepNumberClasses = currentStep == stepNumber ? "selected-step-list-element-number step-list-element-number" : "step-list-element-number";
    return (
        <div className="step-list-element">
            <div className={stepNumberClasses}>{stepNumber}</div>
            <div className="step-list-element-infos">
                <p className="step-list-element-name">STEP {stepNumber}</p>
                <h4 className="step-list-element-action">{stepAction}</h4>
            </div>
        </div>
    );
}

export default StepListElement;
