import React from 'react';

const PlanCard = ({ title, price, imageName }) => {

  const imgPath = `${process.env.PUBLIC_URL}/assets/images/${imageName}`;

  return (
    <div className="plan-card">
      <img className="plan-card-icon" src={imgPath} />
      <h3 className="plan-card-title">{title}</h3>
      <p className="plan-card-price">Price: {price}</p>
    </div>
  );
};

export default PlanCard;
