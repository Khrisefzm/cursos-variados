import React from "react";
import "../styles/categoryCard.css";

export const CategoryCard = ({ img, name }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card text-bg-dark m-3">
        <img src={img} className="categoryImg" alt="Categoría" />
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
};
