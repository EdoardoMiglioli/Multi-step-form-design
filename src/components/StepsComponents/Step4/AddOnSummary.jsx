import React from "react";

const AddOnSummary = ({ name, price }) => {
    return (
        <div className="addon-summary">
            <p className="addon-summary-name">{name}</p>
            <h5 className="addon-summary-price">{price}</h5>
        </div>
    );
}

export default AddOnSummary;
