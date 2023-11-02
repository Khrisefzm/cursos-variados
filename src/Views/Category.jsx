import React from "react";
import { useParams } from "react-router-dom";

export const Category = () => {
  const params = useParams();
  return (
    <>
      <h1>Categoria {params.id}</h1>
    </>
  );
};
