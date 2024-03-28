import React from "react";

const Step5 = () => {
    const imgPath = `${process.env.PUBLIC_URL}/assets/images/icon-thank-you.svg`;

    return (
        <div className="step-5">
            <img className="step-5-icon" src={imgPath} />
            <h1 className="title step-5-title" >Thank You!</h1>
            <p className="subtitle step-5-subtitle"> 
              Thanks for confirming your subscription! We hope you have 
              fun using our platform. If you ever need support, please feel free 
              to email us at support@loremgaming.com.
            </p>
        </div>
    );
}
 
export default Step5;
