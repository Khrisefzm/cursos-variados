import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div className="container col-sm-4 col-md-4 col-lg-4 my-1">
      <div className="align-items-center p-2 border border-3 rounded mx-2">
        <img className="m-auto" src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p className="p-0 m-0">{product.description}</p>
        <Link to={product.link}>
          <button className="btn btn-primary">Ver más</button>
        </Link>
      </div>
    </div>
  );
};
