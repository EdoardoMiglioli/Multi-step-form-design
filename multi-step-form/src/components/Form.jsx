import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar/Sidebar";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

const Form = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentStep, setCurrentStep] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      plan: "Arcade",
      planMonthlyPrice: "$9/mo",
      planYearlyPrice: "$90/yr",
      isMonthly: isMonthly,
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
  });

  useEffect(() => {
    setFormData(prevFormData => ({
        ...prevFormData,
        isMonthly: isMonthly  
    }));
  }, [isMonthly]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
  };

  const handleClick = (fieldName, value) => {
    setFormData(prevValues => ({
      ...prevValues,
      [fieldName]: value
    }));
  };

  const toggleIsMonthly = () => {
    setIsMonthly(!isMonthly);
  }

  const handleNext = () => {
      setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
      setCurrentStep(currentStep - 1);
  };

  return (
    <div className="form-container">
      {(windowWidth <= 768) && <Sidebar currentStep={currentStep} isDekstop={false} />}
      <div className="form">
          {(windowWidth > 768) && <Sidebar currentStep={currentStep} isDekstop={true} />}
          {currentStep === 1 && (
            <Step1
              formData={formData}
              handleChange={handleChange}
              onNext={handleNext}
            />
          )}
  
          {currentStep === 2 && (
            <Step2
              plan={formData.plan}
              isMonthly={formData.isMonthly}
              toggleIsMonthly={toggleIsMonthly}
              handleClick={handleClick}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
  
          {currentStep === 3 && (
            <Step3
              formData={formData}
              handleClick={handleClick}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
  
          {currentStep === 4 && (
            <Step4
              formData={formData}
              isMonthly={formData.isMonthly}
              onPrev={handlePrev}
            />
          )}
      </div>
    </div>
  );
}

export default Form;
