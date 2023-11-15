import React from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css";

export const DistinguishProductCard = ({ product }) => {
  return (
    <div className="container col-sm-6 col-md-4 col-lg-4 my-1 pb-3">
      <div className="align-items-center mx-2 border productCardContainer">
        <Link
          to={product.link}
          className="distinguishContainer"
          target="_blank"
        >
          <img
            className="m-auto imageProducts"
            src={product.image}
            alt={product.name}
          />
          <div className="onHoverText d-flex align-items-center">
            <div>
              <p className="text-center m-0 p-3">{product.description}</p>
              <p className="text-center m-0 p-3">Ver más</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
