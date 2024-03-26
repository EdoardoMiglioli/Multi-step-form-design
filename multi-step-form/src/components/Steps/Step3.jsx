import React from 'react';
import AddOnCard from '../StepsComponents/Step3/AddOnCard';
import NextButton from '../Buttons/NextButton';
import BackButton from '../Buttons/BackBotton';

function Step3({ formData, handleClick, onNext, onPrev }) {
  const { isMonthly, isYearly } = formData;
  const addOnsArray = [
    {
      id: 1,
      name: "Online service",
      formDataKey: "onlineService",
      isSelected: formData.onlineService,
      description: "Access to multiplayer games",
      monthlyPrice: "$1/mo",
      yearlyPrice: "$10/yr",
    },

    {
      id: 2,
      name: "Larger storage",
      formDataKey: "largerStorage",
      isSelected: formData.largerStorage,
      description: "Extra 1TB of cloud save",
      monthlyPrice: "$2/mo",
      yearlyPrice: "$20/yr",
    },

    {
      id: 3,
      name: "Customizable profile",
      formDataKey: "customizableProfile",
      isSelected: formData.customizableProfile,
      description: "Custom theme on your profile",
      monthlyPrice: "$2/mo",
      yearlyPrice: "$20/yr",
    }
  ];

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
      <div className="header">
        <h2 className="title">Pick add-ons</h2>
        <p className="subtitle">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="addons-container">
        {addOnsArray.map(addOn => <AddOnCard 
          key={addOn.id} id={addOn.id} 
          name={addOn.name} description={addOn.description} 
          formDataKey={addOn.formDataKey}
          isAddonSelected={addOn.isSelected}
          price={isMonthly ? addOn.monthlyPrice : addOn.yearlyPrice} 
          handleClick={handleClick}
        />)}
      </div>

      <div className="buttons-container">
        <BackButton handlePrev={handlePrev} />
        <NextButton handleNext={handleNext} />
      </div>
    </div>
  );
}

export default Step3;