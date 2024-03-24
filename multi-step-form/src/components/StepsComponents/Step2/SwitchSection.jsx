// SwitchSection.js
import React, { useState } from 'react';

const SwitchSection = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
        <div className="switch-section-container">
            <p className="switch-section-text">Monthly</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <p className="switch-section-text">Yearly</p>
        </div>
    );
};

export default SwitchSection;
