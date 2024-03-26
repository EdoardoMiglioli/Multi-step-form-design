import React, { useState } from 'react';

const SwitchSection = ({ isMonthly, toggleIsMonthly }) => {
    const [isChecked, setIsChecked] = useState(isMonthly);

    const handleSwitchChange = (e) => {
        setIsChecked(!isChecked);
        toggleIsMonthly();
      };
    
    return (
        <div className="switch-section-container">
            <p className={isChecked ? "selected-switch-section-text" : "switch-section-text" }>Monthly</p>
            <label className="switch">
                <input type="checkbox" checked={!isChecked} onChange={handleSwitchChange}/>
                <span className="slider round"></span>
            </label>
            <p className={!isChecked ? "selected-switch-section-text" : "switch-section-text" }>Yearly</p>
        </div>
    );
};

export default SwitchSection;
