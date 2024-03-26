import React from "react";

const TotalSection = ({ calculateFinalBill, formData, isMonthly }) => {

    return (
        <div className="total-section">
            <p className="total-text">Total (per {isMonthly ? "month" : "year"})</p>
            <h2 className="total-price">{calculateFinalBill(formData, isMonthly)}</h2>
        </div>
    );
}

export default TotalSection;
