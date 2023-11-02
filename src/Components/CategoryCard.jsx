import React from "react";
import "../styles/categoryCard.css";
import { Link } from "react-router-dom";

export const CategoryCard = ({ img, name, id }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <Link to={"/categorias/" + id} className="card text-bg-dark m-3">
        <img src={img} className="categoryImg" alt="Categoría" />
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </Link>
    </div>
  );
};
