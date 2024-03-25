import React from "react";

const TotalSection = ({ planPrice, addOnsPrices, isMonthly }) => {

    return (
        <div className="total-section">
            <p className="total-text">Total (per month)</p>
            <h2 className="total-price">+${}10/mo</h2>
        </div>
    );
}

export default TotalSection;
