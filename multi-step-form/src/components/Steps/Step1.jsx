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
            <label className="input-label" htmlFor="nameInput">Name</label>
            {displayError && !name && <p className="error">This field is required</p>}
          </div>
          <input
            id="nameInput"
            className={(displayError && !email) ? "error-text-input text-input" : "text-input"}
            value={name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            type="text"
            autoComplete="name"
            name="name"
            aria-describedby="name input"
          />
        </div>
  
        <div className="input-container">
          <div className="input-texts-container">
            <label className="input-label" htmlFor="emailInput">Email address</label>
            {displayError && !email && <p className="error">This field is required</p>}
          </div>
          <input
            id="emailInput"
            className={(displayError && !email) ? "error-text-input text-input" : "text-input"}
            value={email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            autoComplete="email"
            name="email"
            aria-describedby="email input"
          />
        </div>
        
        <div className="input-container">
          <div className="input-texts-container">
            <label className="input-label" htmlFor="phoneInput">Phone number</label>
            {displayError && !phone && <p className="error">This field is required</p>}
          </div>
          <input
            id="phoneInput"
            className={(displayError && !email) ? "error-text-input text-input" : "text-input"}
            value={phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            type="tel"
            autoComplete="tel"
            name="phone"
            aria-describedby="phone number input"
          />
        </div>
      </div>

      <NextButton handleNext={handleNext} />
    </div>
  );
}

export default Step1;