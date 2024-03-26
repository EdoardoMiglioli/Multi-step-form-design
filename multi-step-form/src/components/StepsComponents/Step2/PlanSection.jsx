// PlanSelection.js
import React, { useState } from 'react';
import PlanCard from './PlanCard';

const PlanSelection = ({ plan, isMonthly, handleClick }) => {
  const [selectedPlan, setSelectedPlan] = useState(plan);
  const handlePlanSelection = (planName, planMonthlyPrice, planYearlyPrice) => {
    handleClick("plan", planName);
    handleClick("planMonthlyPrice", planMonthlyPrice);
    handleClick("planYearlyPrice", planYearlyPrice);
    setSelectedPlan(planName);
  }

  return (
    <div className="plan-cards">
        <PlanCard
          title="Arcade"
          isMonthly={isMonthly}
          monthlyPrice="$9/mo"
          yearlyPrice="$90/yr"
          imageName="icon-arcade.svg"
          handlePlanSelection={handlePlanSelection}
          isSelected={selectedPlan === "Arcade"}
        />
        <PlanCard
          title="Advanced"
          isMonthly={isMonthly}
          monthlyPrice="$12/mo"
          yearlyPrice="$120/yr"
          imageName="icon-advanced.svg"
          handlePlanSelection={handlePlanSelection}
          isSelected={selectedPlan === "Advanced"}
        />
        <PlanCard
          title="Pro"
          isMonthly={isMonthly}
          monthlyPrice="$15/mo"
          yearlyPrice="$150/yr"
          imageName="icon-pro.svg"
          handlePlanSelection={handlePlanSelection}
          isSelected={selectedPlan === "Pro"}
        />
    </div>
  );
};

export default PlanSelection;
