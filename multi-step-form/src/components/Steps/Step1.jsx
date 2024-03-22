import React from 'react';

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
      <h2 className="title">Personal info</h2>
      <p className="subtitle">Please provide your name, email address and phone number</p>
      <label>
        Name:
        <input
            className="text-input"
            value={name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            type="text"
            name="name"
        />
      </label>

      <label>
        Email address:
        <input
            className="text-input"
            value={email}
            onChange={handleChange}
            placeholder="e.g. stephenking@"
            type="text"
            name="email"
        />
      </label>

      <label>
        Phone number:
        <input
            className="text-input"
            value={phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            type="text"
            name="email"
        />
      </label>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step1;