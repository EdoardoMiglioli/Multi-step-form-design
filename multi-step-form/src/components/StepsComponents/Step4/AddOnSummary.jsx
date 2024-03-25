import React from "react";

const AddOnSummary = ({ name, price }) => {
    return (
        <div className="addon-summary">
            <p className="addon-summary-name">{name}Online service</p>
            <h5 className="addon-summary-price">+$1/mo{price}</h5>
        </div>
    );
}

export default AddOnSummary;
