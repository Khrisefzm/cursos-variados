import React from "react";
import { NavBar } from "../Components/NavBar.jsx";
import { Footer } from "../Components/Footer.jsx";
import { ProductCard } from "../Components/ProductCard.jsx";
import products from "../mocks/products.json";

export const Products = () => {
  return (
    <>
      <NavBar />
      <main className="py-3 container">
        <h1 className="text-center">Cursos Disponibles</h1>
        <form action="" className="my-5">
          <div className="container input-group" style={{ zIndex: 0 }}>
            <input
              type="text"
              className="form-control col-6"
              placeholder="Buscar curso"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Buscar
            </button>
          </div>
        </form>
        <div className="row d-flex align-items-stretch">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
