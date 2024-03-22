import React from "react";

const AddOnCard = ({ name, description, price}) => {
    return (
        <div className="addon-card-container">
            <input
                className="addon-card-checkbox" 
                type="checkbox"
            />
            <div>
                <h4 className="addon-card-name">{name}</h4>
                <p className="addon-card-description">{description}</p>
            </div>
            <p className="addon-card-price">{price}</p>
        </div>
    );
}

export default AddOnCard;
