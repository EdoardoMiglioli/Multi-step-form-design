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
      <h2>Step 1</h2>
      <label>
        Name:
        <input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
        />
      </label>

      <label>
        Email address:
        <input
            value={email}
            onChange={handleChange}
            type="text"
            name="email"
        />
      </label>

      <label>
        Phone number:
        <input
            value={phone}
            onChange={handleChange}
            type="text"
            name="email"
        />
      </label>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step1;