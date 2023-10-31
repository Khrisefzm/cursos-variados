import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p className="text-center">Siguenes en nuestras redes sociales:</p>
        <div className="d-flex justify-content-center">
          <Link to="" target="_blank" rel="noopener noreferrer">
            <img src="" alt="" />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer">
            <img src="" alt="" />
          </Link>
        </div>
      </div>
      <div>
        <p className="text-center">
          © {year} Cursos Variados. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
