import React from 'react';
import NextButton from '../Buttons/NextButton';

function Step1({ formData, handleChange, onNext }) {
  const { name, email, phone } = formData;

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

  return (
    <div className="step step-1">
      <div className="header">
        <h2 className="title">Personal info</h2>
        <p className="subtitle">Please provide your name, email address and phone number</p>
      </div>

      <div className="inputs-container">
        <div className="input-container">
          <label className="input-label">Name</label>
          <input
              className="text-input"
              value={name}
              onChange={handleChange}
              placeholder="e.g. Stephen King"
              type="text"
              name="name"
          />
        </div>
  
        <div className="input-container">
          <label className="input-label">Email address</label>
          <input
              className="text-input"
              value={email}
              onChange={handleChange}
              placeholder="e.g. stephenking@"
              type="text"
              name="email"
          />
        </div>
        
        <div className="input-container">
          <label className="input-label">Phone number</label>
          <input
            className="text-input"
            value={phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            type="text"
            name="email"
          />
        </div>
      </div>

      <NextButton handleNext={handleNext} />
    </div>
  );
}

export default Step1;