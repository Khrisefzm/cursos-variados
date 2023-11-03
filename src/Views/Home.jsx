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
        src="https://scontent.flim31-1.fna.fbcdn.net/v/t39.30808-6/341097437_757491112660791_8783214212845245248_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHejP1SIECDzXRcWaS5prBnj_CArHlkZ8GP8ICseWRnwX_mUn07biqBsCYrEnE-dxkWiodPw5JUHq8skWBSSBqn&_nc_ohc=oai6Ib2b12gAX8slWSS&_nc_ht=scontent.flim31-1.fna&oh=00_AfCZomtgBRW-LDyV1phMgDKmZZGdH0oon89Ot-DvZyZGpA&oe=6547E158"
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
              <CategoryCard
                key={key}
                id={element.id}
                img={element.img}
                name={element.name}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
