import React from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../Components/NavBar.jsx";
import { Footer } from "../Components/Footer.jsx";

import products from "../mocks/products.json";
import { ProductCard } from "../Components/ProductCard.jsx";

export const Category = () => {
  const params = useParams();
  const categoryId = params.id * 1;

  const categoryProducts = products.filter((element) => {
    for (let i = 0; i < element.category.length; i++) {
      if (element.category[i] === categoryId) return true;
    }
    return false;
  });
  return (
    <>
      <NavBar />
      <main className="py-3">
        <h1 className="text-center">Categoria {params.id}</h1>
        <div className="row">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
