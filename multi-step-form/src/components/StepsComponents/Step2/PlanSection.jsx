// PlanSelection.js
import React, { useState } from 'react';
import PlanCard from './PlanCard';

const PlanSelection = ({ plan, handleClick }) => {
  const [selectedPlan, setSelectedPlan] = useState(plan);
  const handlePlanSelection = (planName, planPrice) => {
    handleClick("plan", planName);
    handleClick("planPrice", planPrice);
    setSelectedPlan(planName);
  }

  return (
    <div className="plan-cards">
        <PlanCard
          title="Arcade"
          price="$9/mo"
          imageName="icon-arcade.svg"
          handlePlanSelection={handlePlanSelection}
          isSelected={selectedPlan === "Arcade"}
        />
        <PlanCard
          title="Advanced"
          price="$12/mo"
          imageName="icon-advanced.svg"
          handlePlanSelection={handlePlanSelection}
          isSelected={selectedPlan === "Advanced"}
        />
        <PlanCard
          title="Pro"
          price="$15/mo"
          imageName="icon-pro.svg"
          handlePlanSelection={handlePlanSelection}
          isSelected={selectedPlan === "Pro"}
        />
    </div>
  );
};

export default PlanSelection;
