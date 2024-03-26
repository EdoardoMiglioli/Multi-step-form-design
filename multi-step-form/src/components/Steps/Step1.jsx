import React, { useState } from 'react';
import NextButton from '../Buttons/NextButton';

function Step1({ formData, handleChange, onNext }) {
  const [displayError, setDisplayError] = useState(false);
  const { name, email, phone } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setDisplayError(true);
      return
    }
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
          <div className="input-texts-container">
            <label className="input-label">Name</label>
            {displayError && !name && <p className="error">This field is required</p>}
          </div>
          <input
              className={(displayError && !email) ? "error-text-input text-input" : "text-input"}
              value={name}
              onChange={handleChange}
              placeholder="e.g. Stephen King"
              type="text"
              name="name"
          />
        </div>
  
        <div className="input-container">
        <div className="input-texts-container">
            <label className="input-label">Email address</label>
            {displayError && !email && <p className="error">This field is required</p>}
          </div>
          <input
              className={(displayError && !email) ? "error-text-input text-input" : "text-input"}
              value={email}
              onChange={handleChange}
              placeholder="e.g. stephenking@lorem.com"
              type="email"
              name="email"
          />
        </div>
        
        <div className="input-container">
          <div className="input-texts-container">
            <label className="input-label">Phone number</label>
            {displayError && !phone && <p className="error">This field is required</p>}
          </div>
          <input
            className={(displayError && !email) ? "error-text-input text-input" : "text-input"}
            value={phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            type="text"
            name="phone"
          />
        </div>
      </div>

      <NextButton handleNext={handleNext} />
    </div>
  );
}

export default Step1;