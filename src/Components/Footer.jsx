import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

import fb from "../img/facebook.png";
import ig from "../img/instagram.png";

export const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="bg-dark p-3 mt-4">
      <div>
        <p className="text-center fw-bold text-light fs-5">
          Síguenos en nuestras redes sociales:
        </p>
        <div className="d-flex justify-content-center">
          <Link
            to="https://www.facebook.com/profile.php?id=100071801605484"
            className="mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialMediaLogo"
              src={fb}
              alt="facebook"
              loading="lazy"
            />
          </Link>
          <Link
            className="mx-2"
            to="https://www.instagram.com/cursosvariados.oficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialMediaLogo"
              src={ig}
              alt="instagram"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-center text-light reduceFontSize">
          © {year} Cursos Variados. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
