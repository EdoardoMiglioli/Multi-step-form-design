// SwitchSection.js
import React, { useState } from 'react';

const SwitchSection = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
        <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
    );
};

export default SwitchSection;
