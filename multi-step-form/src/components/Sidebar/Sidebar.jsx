import React from "react";
import StepListElement from "./StepListElement";

const Sidebar = ({ currentStep }) => {
    return (
        <div className="sidebar">
            <StepListElement stepNumber="1" stepAction="YOUR INFO" currentStep={currentStep} />
            <StepListElement stepNumber="2" stepAction="SELECT PLAN" currentStep={currentStep} />
            <StepListElement stepNumber="3" stepAction="ADD-ONS" currentStep={currentStep} />
            <StepListElement stepNumber="4" stepAction="SUMMARY" currentStep={currentStep} />
        </div>
    );
}

export default Sidebar;
