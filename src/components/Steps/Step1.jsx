import React, { useState, useEffect } from 'react';
import NextButton from '../Buttons/NextButton';

function Step1({ displayErrorStep1, setDisplayErrorStep1, formData, handleChange, onNext }) {
  const { name, email, phone } = formData;
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  useEffect(() => {
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    setIsValidEmail(validateEmail(email));
  }, [email]);

  useEffect(() => {
    const validatePhone = (phone) => {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    }

    setIsValidPhone(validatePhone(phone));
  }, [phone]);

  const handleNext = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setDisplayErrorStep1(true);
      return
    }
    onNext();
  };

  return (
    <section className="step step-1">
      <header className="header">
        <h1 className="title">Personal info</h1>
        <p className="subtitle">Please provide your name, email address and phone number</p>
      </header>

      <div className="inputs-container">
        <div className="input-container">
          <div className="input-texts-container">
            <label className="input-label" htmlFor="nameInput">Name</label>
            {displayErrorStep1 && !name && <p className="error">This field is required</p>}
          </div>
          <input
            id="nameInput"
            className={(displayErrorStep1 && !name) ? "error-text-input text-input" : "text-input"}
            value={name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            type="text"
            autoComplete="name"
            name="name"
          />
        </div>
  
        <div className="input-container">
          <div className="input-texts-container">
            <label className="input-label" htmlFor="emailInput">Email address</label>
            {displayErrorStep1 && !email && <p className="error">This field is required</p>}
            {!isValidEmail && email && <p className="error">Mail isn't spelled well</p>}
          </div>
          <input
            id="emailInput"
            className={(displayErrorStep1 && !isValidEmail && !email) ? "error-text-input text-input" : "text-input"}
            value={email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            autoComplete="email"
            name="email"
          />
        </div>
        
        <div className="input-container">
          <div className="input-texts-container">
            <label className="input-label" htmlFor="phoneInput">Phone number</label>
            {displayErrorStep1 && !phone && <p className="error">This field is required</p>}
            {!isValidPhone && phone && <p className="error">Phone number isn't valid</p>}
          </div>
          <input
            id="phoneInput"
            className={(displayErrorStep1 && !isValidPhone && !phone) ? "error-text-input text-input" : "text-input"}
            value={phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            type="tel"
            autoComplete="tel"
            name="phone"
          />
        </div>
      </div>

      <div className="buttons-container">
        <NextButton handleNext={handleNext} />
      </div>
    </section>
  );
}

export default Step1;