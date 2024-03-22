import React from 'react';

function Step4({ formData, handleChange, onPrev }) {
  const { name, email } = formData;

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
    <div className="step step-4">
      <h2>Step 4</h2>
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
    </div>
  );
}

export default Step4;