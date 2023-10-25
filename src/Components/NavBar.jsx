import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img
            src="https://scontent.flim31-1.fna.fbcdn.net/v/t39.30808-6/341098938_716758236907857_5075811661982531885_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8kri1xtNbhmHeP1BCQK_4Hbn8qLE6X2UdufyosTpfZR4B5QLAiKMxOeRleBZd98RazKIjHkFiazh4WhYOnC8B&_nc_ohc=uRCk9mZ15gEAX-AtgVC&_nc_ht=scontent.flim31-1.fna&oh=00_AfBhepDBiiX_QUMD3Db5H3IeTwBddudKcVSH5vLpvwwudA&oe=653DDD70"
            alt="Logo"
            width="80"
            height="80"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cursos"} className="nav-link">
                Cursos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to={"/categorias/1"} className="dropdown-item">
                    Hogar y Mascotas
                  </Link>
                </li>
                <li>
                  <Link to={"/categorias/2"} className="dropdown-item">
                    Emprendimiento y Finanzas
                  </Link>
                </li>
                <li>
                  <Link to={"/categorias/3"} className="dropdown-item">
                    Salud y Bienestar
                  </Link>
                </li>
                <li>
                  <Link to={"/categorias/4"} className="dropdown-item">
                    Relaciones
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
