import React, { useState } from 'react';

const PlanCard = ({ title, isMonthly, monthlyPrice, yearlyPrice, imageName, handlePlanSelection, isSelected }) => {
  const imgPath = `${process.env.PUBLIC_URL}/assets/images/${imageName}`;
  const planCardClasses = isSelected ? "plan-card selected-plan-card" : "plan-card";

  return (
    <div className={planCardClasses} name="plan" onClick={() => handlePlanSelection(title, monthlyPrice, yearlyPrice)} >
      <img className="plan-card-icon" src={imgPath} />
      <h3 className="plan-card-title">{title}</h3>
      <p className="plan-card-price">Price: {isMonthly ? monthlyPrice : yearlyPrice}</p>
    </div>
  );
};

export default PlanCard;
