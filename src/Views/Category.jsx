import React from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../Components/NavBar.jsx";
import { Footer } from "../Components/Footer.jsx";
import { ProductCard } from "../Components/ProductCard.jsx";

import products from "../mocks/products.json";
import categories from "../mocks/categories.json";

export const Category = () => {
  const params = useParams();
  const categoryId = params.id * 1; //Same to make a Parce int

  const category = categories.filter((element) => element.id === categoryId); //Obtein an array of the category with the param id

  const categoryProducts = products.filter((element) => {
    for (let i = 0; i < element.category.length; i++) {
      if (element.category[i] === categoryId) return true;
    }
    return false;
  });
  return (
    <>
      <NavBar />
      <main className="py-3 container">
        {category.length === 0 ? (
          <h1>404 Not Found</h1>
        ) : (
          <>
            <h1 className="text-center">{category[0].name}</h1>
            <div className="row d-flex align-items-stretch">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
