import React from 'react';
import PlanSelection from '../StepsComponents/PlanSection';
import SwitchSection from '../StepsComponents/SwitchSection';

function Step2({ formData, handleChange, onNext, onPrev }) {
  const { name, email } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    // Add validation logic here
    // For example:
    // if (!name || !email) {
    //   // Display error message
    //   return;
    // }
    onNext();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    // Add validation logic here
    // For example:
    // if (!name || !email) {
    //   // Display error message
    //   return;
    // }
    onPrev();
  };

  return (
    <div className="step step-2">
      <h2 className="title">Select your plan</h2>
      <p className="subtitle">You have the option of mothly or yearly billing.</p>
      <PlanSelection />
      <SwitchSection />

      <button onClick={handlePrev}>Go back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step2;