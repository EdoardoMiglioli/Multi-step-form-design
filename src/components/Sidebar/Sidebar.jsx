import React from "react";
import StepListElement from "./StepListElement";

const Sidebar = ({ currentStep, isDekstop }) => {
    return (
        <aside className="sidebar">
            <StepListElement stepNumber="1" stepAction="YOUR INFO" currentStep={currentStep} isDekstop={isDekstop} />
            <StepListElement stepNumber="2" stepAction="SELECT PLAN" currentStep={currentStep} isDekstop={isDekstop} />
            <StepListElement stepNumber="3" stepAction="ADD-ONS" currentStep={currentStep} isDekstop={isDekstop} />
            <StepListElement stepNumber="4" stepAction="SUMMARY" currentStep={currentStep} isDekstop={isDekstop} />
        </aside>
    );
}

export default Sidebar;
