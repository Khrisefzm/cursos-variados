import React from "react";
import "../styles/benefitCard.css";

export const BenefitCard = ({ ico, text }) => {
  return (
    <div className="container col-sm-4 col-md-4 col-lg-4 my-1">
      <div className="row align-items-center p-2 border border-3 rounded mx-2">
        <div className="col-sm-12 col-md-12 col-lg-3 ">
          <img className="icon m-auto" src={ico} alt="benefit icon" />
        </div>
        <div className="col d-flex align-items-center cardText">
          <p className="p-0 m-0">{text}</p>
        </div>
      </div>
    </div>
  );
};
