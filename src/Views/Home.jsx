import React from "react";
import "../styles/home.css";
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
      img: home,
      name: "Hogar y Mascotas",
    },
    {
      img: money,
      name: "Emprendimiento y Finanzas",
    },
    {
      img: health,
      name: "Salud y Bienestar",
    },
    {
      img: relationship,
      name: "Relaciones",
    },
  ];
  return (
    <>
      <NavBar />
      <img
        className="full-screen"
        src="https://scontent.flim31-1.fna.fbcdn.net/v/t39.30808-6/341097437_757491112660791_8783214212845245248_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHejP1SIECDzXRcWaS5prBnj_CArHlkZ8GP8ICseWRnwX_mUn07biqBsCYrEnE-dxkWiodPw5JUHq8skWBSSBqn&_nc_ohc=jok237fgLsQAX8PavJD&_nc_ht=scontent.flim31-1.fna&oh=00_AfCfabsEBQGhuVnb3xZUl3AwHZcQypFxV7ajljwxNkqGlQ&oe=653DFE18"
        alt="fondo de imagen"
        loading="lazy"
      />
      <section className="p-4 container">
        <h2 className="text-center">TODOS NUESTROS CURSOS </h2>
        <div className="row">
          {benefits.map((element) => {
            return <BenefitCard ico={element.ico} text={element.text} />;
          })}
        </div>
      </section>
      <section className="container">
        <h2 className="text-center">Categorías</h2>
        <div className="row">
          {categories.map((element) => {
            return <CategoryCard img={element.img} name={element.name} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
