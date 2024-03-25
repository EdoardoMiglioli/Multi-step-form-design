import React from "react";
import StepListElement from "./StepListElement";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <StepListElement stepNumber="1" stepAction="YOUR INFO" />
            <StepListElement stepNumber="2" stepAction="SELECT PLAN" />
            <StepListElement stepNumber="3" stepAction="ADD-ONS" />
            <StepListElement stepNumber="4" stepAction="SUMMARY" />
        </div>
    );
}

export default Sidebar;
