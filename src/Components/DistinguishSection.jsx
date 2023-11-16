import React from "react";
import categories from "../mocks/categories.json";
import products from "../mocks/products.json";
import { DistinguishProductCard } from "./DistinguishProductCard.jsx";

export const DistinguishSection = () => {
  const distinguishProducts = products.filter(
    (product) => product.distinguish === true
  );
  return (
    <>
      {categories.map((category) => {
        const distinguishProductsPerCategory = distinguishProducts.filter(
          (element) => {
            for (let i = 0; i < element.category.length; i++) {
              if (element.category[i] === category.id * 1) return true;
            }
            return false;
          }
        );
        return (
          <div key={category.id}>
            <div
              className="border-top border-bottom border-secondary border-2 p-3 mb-3 my-0"
              style={{ backgroundColor: "rgb(220, 104, 34, 0.1)" }}
            >
              <h3 className="text-center">{category.name}</h3>
            </div>
            <div className="col">
              <div className="row d-flex flex-row px-3">
                {distinguishProductsPerCategory.map((product) => (
                  <DistinguishProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
