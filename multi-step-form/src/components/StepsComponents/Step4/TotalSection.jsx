import React from "react";

const TotalSection = ({ planPrice, addOnsPrices, isMonthly }) => {

    return (
        <div className="total-section">
            <p>Total()</p>
            <h2 className="total-price">+${}/mo</h2>
        </div>
    );
}

export default TotalSection;
