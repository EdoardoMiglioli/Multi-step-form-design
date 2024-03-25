import React from "react";

const AddOnCard = ({ name, description, price}) => {
    return (
        <div className="addon-card-container">
            <label className="checkbox-container">
                <input
                    className="checkbox-input" 
                    type="checkbox"
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
