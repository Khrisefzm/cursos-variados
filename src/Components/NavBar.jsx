import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";
import logo from "../img/Logo.png";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg customized py-1">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="50"
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
