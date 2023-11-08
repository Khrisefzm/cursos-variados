import React from "react";
import "../styles/home.css";
import course from "../img/home-img/Cursos.jpg";
import desktop from "../img/home-img/desktop.png";
import calendar from "../img/home-img/schedule.png";
import guaratee from "../img/home-img/ribbon.png";
import home from "../img/home-img/hogar y mascota.jpg";
import money from "../img/home-img/emprendimiento y finanzas.jpg";
import health from "../img/home-img/salud y bienestar.jpg";
import relationship from "../img/home-img/relaciones.jpg";
import { NavBar } from "../Components/NavBar.jsx";
import { BenefitCard } from "../Components/BenefitCard.jsx";
import { CategoryCard } from "../Components/CategoryCard";
import { Footer } from "../Components/Footer";

function Home() {
  const benefits = [
    {
      ico: desktop,
      text: "Son online, para que puedas verlos desde donde quieras",
    },
    {
      ico: calendar,
      text: "Puedes verlos cuando quieras, tú eliges tus tiempos",
    },
    {
      ico: guaratee,
      text: "Cuentan con garantía de reembolso total de 7 días",
    },
  ];

  const categories = [
    {
      id: 1,
      img: home,
      name: "Hogar y Mascotas",
    },
    {
      id: 2,
      img: money,
      name: "Emprendimiento y Finanzas",
    },
    {
      id: 3,
      img: health,
      name: "Salud y Bienestar",
    },
    {
      id: 4,
      img: relationship,
      name: "Relaciones",
    },
  ];

  return (
    <>
      <NavBar />
      <img
        className="full-screen"
        src={course}
        alt="fondo de imagen"
        loading="lazy"
      />
      <section className="py-5 container">
        <h2 className="text-center">Todos nuestros Cursos: </h2>
        <div className="row pt-4">
          {benefits.map((element, key) => {
            return (
              <BenefitCard key={key} ico={element.ico} text={element.text} />
            );
          })}
        </div>
      </section>
      <section className="pb-5 container">
        <h2 className="text-center">Categorías</h2>
        <div className="row pt-4">
          {categories.map((element, key) => {
            return (
              <>
                <CategoryCard
                  key={key}
                  id={element.id}
                  img={element.img}
                  name={element.name}
                />
              </>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
