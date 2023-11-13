import React, { useState } from "react";
import { NavBar } from "../Components/NavBar.jsx";
import { Footer } from "../Components/Footer.jsx";
import { ProductCard } from "../Components/ProductCard.jsx";
import products from "../mocks/products.json";

export const Products = () => {
  const [productName, setProductName] = useState(products);
  const [search, setSerch] = useState("");

  const handleChange = (e) => {
    setSerch(e.target.value);
  };

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const condition = () => {
    let result = [];
    search === ""
      ? (result = products)
      : (result = products.filter((product) =>
          removeAccents(product.name.toLocaleLowerCase()).includes(
            removeAccents(search.toLocaleLowerCase())
          )
        ));
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterProducts = condition();
    setProductName(filterProducts);
  };

  return (
    <>
      <NavBar />
      <main className="py-3 container">
        <h1 className="text-center">Cursos Disponibles</h1>
        <form className="my-5" onSubmit={handleSubmit}>
          <div className="input-group" style={{ zIndex: 0 }}>
            <input
              value={search}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Buscar curso"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Buscar
            </button>
          </div>
          {productName.length === 0 ? (
            <div className="text-center alert alert-dark mt-3">
              No se encontró ningun curso
            </div>
          ) : (
            <></>
          )}
        </form>
        <div className="row d-flex align-items-stretch">
          {productName.length === 0 ? (
            <>
              <h2 className="text-center">
                Otros cursos que te pueden interesar
              </h2>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          ) : (
            productName.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
