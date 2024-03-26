import React, { useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

const Form = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        plan: "",
        isMonthly: true,
        isYearly: false,
        isOnlineService: false,
        largerStorage: false,
        customizableProfile: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleClick = (fieldName, value) => {
      setFormData({
        ...formData,
        [fieldName]: value
      });
    };

    const handleNext = () => {
      setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
      setCurrentStep(currentStep - 1);
    };

    return (
        <div className="form">
            <Sidebar currentStep={currentStep} />

            {currentStep === 1 && (
              <Step1
                formData={formData}
                handleChange={handleChange}
                onNext={handleNext}
              />
            )}
    
            {currentStep === 2 && (
              <Step2
                formData={formData}
                handleClick={handleClick}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
    
            {currentStep === 3 && (
              <Step3
                formData={formData}
                handleChange={handleChange}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            )}
    
            {currentStep === 4 && (
              <Step4
                formData={formData}
                handleChange={handleChange}
                onPrev={handlePrev}
              />
            )}

        </div>
    );
}

export default Form;
