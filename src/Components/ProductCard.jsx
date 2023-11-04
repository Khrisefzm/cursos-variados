import React from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="container col-sm-6 col-md-4 col-lg-3 my-1 pb-3">
      <div className="align-items-center p-2 border border-3 rounded mx-2 productCardContainer">
        <img
          className="m-auto imageProducts"
          src={product.image}
          alt={product.name}
        />
        <h2 className="productCardTitle">{product.name}</h2>
        <p className="p-0 m-0">{product.description}</p>
        <div className="d-flex flex-row-reverse align-items-end bottonProductContainer">
          <Link to={product.link} target="_blanck">
            <button className="btn btn-primary">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
