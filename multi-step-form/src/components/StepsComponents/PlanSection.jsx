// PlanSelection.js
import React, { useState } from 'react';
import PlanCard from './PlanCard';

const PlanSelection = ({ setSelectedPlan }) => {
    
    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };
    
    return (
        <div className="plan-cards">
            <PlanCard
              title="Arcade"
              price="$9/month"
              imageName="icon-arcade.svg"
              onClick={() => handleSelectPlan("Arcade")}
            />
            <PlanCard
              title="Advanced"
              price="$12/month"
              imageName="icon-advanced.svg"
              onClick={() => handleSelectPlan("Advanced")}
            />
            <PlanCard
              title="Pro"
              price="$15/month"
              imageName="icon-pro.svg"
              onClick={() => handleSelectPlan("Pro")}
            />
        </div>
    );
};

export default PlanSelection;
