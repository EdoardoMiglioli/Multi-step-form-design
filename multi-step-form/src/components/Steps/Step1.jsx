import React, { useState } from 'react';
import NextButton from '../Buttons/NextButton';

function Step1({ displayErrorStep1, setDisplayErrorStep1, formData, handleChange, onNext }) {
  const { name, email, phone } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setDisplayErrorStep1(true);
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
            {displayErrorStep1 && !name && <p className="error">This field is required</p>}
          </div>
          <input
            id="nameInput"
            className={(displayErrorStep1 && !email) ? "error-text-input text-input" : "text-input"}
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
            {displayErrorStep1 && !email && <p className="error">This field is required</p>}
          </div>
          <input
            id="emailInput"
            className={(displayErrorStep1 && !email) ? "error-text-input text-input" : "text-input"}
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
            {displayErrorStep1 && !phone && <p className="error">This field is required</p>}
          </div>
          <input
            id="phoneInput"
            className={(displayErrorStep1 && !email) ? "error-text-input text-input" : "text-input"}
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

      <div className="buttons-container">
        <NextButton handleNext={handleNext} />
      </div>
    </div>
  );
}

export default Step1;