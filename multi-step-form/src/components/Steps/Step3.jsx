import React from 'react';
import AddOnCard from '../StepsComponents/Step3/AddOnCard';

function Step3({ formData, handleChange, onNext, onPrev }) {
  const { isMonthly, isYearly } = formData;
  const addOnsArray = [
    {
      id: 1,
      name: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: "$1/mo",
      yearlyPrice: "$10/yr",
    },

    {
      id: 2,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: "$2/mo",
      yearlyPrice: "$20/yr",
    },

    {
      id: 3,
      name: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: "$2/mo",
      yearlyPrice: "$20/yr",
    }
  ]

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
    <div className="step step-3">
      <h2 className="title">Pick add-ons</h2>
      <p className="subtitle">Add-ons help enhance your gaming experience.</p>

      {addOnsArray.map(addOn => <AddOnCard 
      
        key={addOn.id} id={addOn.id} 
        name={addOn.name} description={addOn.description} 
        price={isMonthly ? addOn.monthlyPrice : addOn.yearlyPrice} 

        />)}

      <button onClick={handlePrev}>Go back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step3;