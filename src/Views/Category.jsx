import React from "react";
import { useParams } from "react-router-dom";

import products from "../mocks/products.json";

export const Category = () => {
  const params = useParams();
  const categoryId = params.id * 1;

  const categoryProducts = products.filter((element) => {
    for (let i = 0; i < element.category.length; i++) {
      if (element.category[i] === categoryId) return true;
    }
    return false;
  });
  console.log(categoryProducts);
  return (
    <>
      <h1>Categoria {params.id}</h1>
    </>
  );
};
