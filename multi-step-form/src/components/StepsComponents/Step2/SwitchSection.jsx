import React, { useState } from 'react';

const SwitchSection = ({ isMonthly, chengeIsMonthly }) => {
    const [isChecked, setIsChecked] = useState(isMonthly);

    const handleChange = () => {
      setIsChecked(!isMonthly);
    };
  
    return (
        <div className="switch-section-container">
            <p className={isMonthly ? "selected-switch-section-text" : "switch-section-text" }>Monthly</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <p className={!isMonthly ? "selected-switch-section-text" : "switch-section-text" }>Yearly</p>
        </div>
    );
};

export default SwitchSection;
