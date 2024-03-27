import React, { useState } from "react";

const AddOnCard = ({ name, description, formDataKey, isAddonSelected, price, handleClick }) => {
    const [isSelected, setIsSelected] = useState(isAddonSelected)
    const addonCardClasses = isSelected ? "selected-addon-card-container addon-card-container" : "addon-card-container";


    const handleSelection = () => {
        handleClick(formDataKey, !isSelected);
        setIsSelected(!isSelected);
    }
    return (
        <div className={addonCardClasses} onClick={handleSelection}>
            <label className="checkbox-container" >
                <input
                    className="checkbox-input" 
                    type="checkbox"
                    name="checkbox"
                    onChange={() => {}}
                    checked={isSelected}
                    disabled={true}
                />
                <span className="checkbox-custom"></span>
            </label>
            <div className="addon-card-infos">
                <h4 className="addon-card-name">{name}</h4>
                <p className="addon-card-description">{description}</p>
            </div>
            <p className="addon-card-price">+{price}</p>
        </div>
    );
}

export default AddOnCard;
