import React from 'react';

const PlanCard = ({ title, price, imageName }) => {


    return (
      <div className="plan-card">
        <h3 className="plan-card-title">{title}</h3>
        <p className="plan-card-price">Price: {price}</p>
      </div>
    );
};

export default PlanCard;
