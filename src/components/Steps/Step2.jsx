import React from 'react';
import PlanSelection from '../StepsComponents/Step2/PlanSection';
import SwitchSection from '../StepsComponents/Step2/SwitchSection';
import NextButton from '../Buttons/NextButton';
import BackButton from '../Buttons/BackBotton';

function Step2({ plan, isMonthly, onNext, onPrev, toggleIsMonthly, handleClick }) {

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
    <section className="step step-2">
      <header className="header">
        <h1 className="title">Select your plan</h1>
        <p className="subtitle">You have the option of mothly or yearly billing.</p>
      </header>

      <PlanSelection plan={plan} isMonthly={isMonthly} handleClick={handleClick} />
      <SwitchSection isMonthly={isMonthly} toggleIsMonthly={toggleIsMonthly} />

      <div className="buttons-container">
        <BackButton handlePrev={handlePrev} />
        <NextButton handleNext={handleNext} />
      </div>
    </section>
  );
}

export default Step2;