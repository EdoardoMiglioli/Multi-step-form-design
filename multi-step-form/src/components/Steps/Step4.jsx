import React from 'react';

import AddOnSummary from '../StepsComponents/Step4/AddOnSummary';
import TotalSection from '../StepsComponents/Step4/TotalSection';
import BackButton from '../Buttons/BackBotton';
import ConfirmButton from '../Buttons/ConfirmButton';

function Step4({ formData, isMonthly, onPrev }) {

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

  const extractPriceFromString = (str) => {
    const regex = /\$([\d.]+)/;

    const match = str.match(regex);

    const numericalPart = match[1]; 
    return parseInt(numericalPart, 10); 
  }

  const calculateFinalBill = (formData, isMonthly) => {
    let finalBill = 0;
    const mainPlanPrice = isMonthly ? formData.planMonthlyPrice : formData.planYearlyPrice;
    finalBill += extractPriceFromString(mainPlanPrice);

    if (formData.onlineService) {
      const addOnPrice = isMonthly ? 1 : 10;
      finalBill += addOnPrice;
    }

    if (formData.largerStorage) {
      const addOnPrice = isMonthly ? 2 : 20;
      finalBill += addOnPrice;
    }

    if (formData.customizableProfile) {
      const addOnPrice = isMonthly ? 2 : 20;
      finalBill += addOnPrice;
    }


    return `+$${finalBill}/${isMonthly ? "mo" : "yr"}`;
  }

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
              <h4 className="summary-plan-name">{formData.plan} ({isMonthly ? "monthly" : "yearly"})</h4>
              <p className="summary-plan-change">Change</p>
            </div>
            <h3 className="summary-plan-price">{isMonthly ? formData.planMonthlyPrice : formData.planYearlyPrice}</h3>
          </div>
  
          <div className="addons-summary-container">
            {formData.onlineService && <AddOnSummary name="Online service" price={isMonthly ? "+$1/mo" : "+$10/yr"} />}
            {formData.largerStorage && <AddOnSummary name="Larger storage" price={isMonthly ? "+$2/mo" : "+$20/yr"} />}
            {formData.customizableProfile && <AddOnSummary name="Customizable Profile" price={isMonthly ? "+$2/mo" : "+$20/yr"} />}
          </div>
        </div>
          <TotalSection calculateFinalBill={calculateFinalBill} formData={formData} isMonthly={isMonthly} />
      </div>

      <div className="buttons-container">
        <BackButton handlePrev={handlePrev} />
        <ConfirmButton />
      </div>
    </div>
  );
}

export default Step4;