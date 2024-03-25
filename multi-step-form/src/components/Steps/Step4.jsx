import React from 'react';

import AddOnSummary from '../StepsComponents/Step4/AddOnSummary';
import TotalSection from '../StepsComponents/Step4/TotalSection';
import BackButton from '../Buttons/BackBotton';
import ConfirmButton from '../Buttons/ConfirmButton';

function Step4({ formData, handleChange, onPrev }) {
  const { name, email } = formData;

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
    <div className="step step-4">
    <div className="header">
        <h2 className="title">Finishing up</h2>
        <p className="subtitle">Double-check everything looks OK before confirming.</p>
      </div>

      <div className="summary">
        <div className="summary-pricing-container">
          <div className="summary-plan">
            <div className="summary-plan-name-container">
              <h4 className="summary-plan-name">Arcade (monthly)</h4>
              <p className="summary-plan-change">Change</p>
            </div>
            <h3 className="summary-plan-price">$9/mo</h3>
          </div>
  
          <div className="addons-summary-container">
            <AddOnSummary />
          </div>
        </div>
        
        <TotalSection />
      </div>

      <div className="buttons-container">
        <BackButton handlePrev={handlePrev} />
        <ConfirmButton />
      </div>
    </div>
  );
}

export default Step4;