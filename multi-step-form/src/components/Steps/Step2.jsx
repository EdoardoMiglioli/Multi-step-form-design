import React from 'react';

function Step2({ formData, handleChange, onNext, onPrev }) {
  const { name, email } = formData;

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
    <div className="step step-2">
      <h2>Step 2</h2>
      <label>
        Name:
        <input
            value={name}
            onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
            value={email}
            onChange={handleChange}
        />
      </label>

      <button onClick={handlePrev}>Go back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step2;