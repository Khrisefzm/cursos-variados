import React from "react";

export const BenefitCard = ({ ico, text }) => {
  return (
    <div className="col border mx-3">
      <div className="row">
        <div className="col">
          <img src={ico} alt="benefit icon" />
        </div>
        <div className="col ">{text}</div>
      </div>
    </div>
  );
};
