import React from "react";
import "../styles/home.css";
import { NavBar } from "../Components/NavBar.jsx";

function Home() {
  return (
    <>
      <NavBar />
      <img
        className="full-screen"
        src="https://scontent.flim31-1.fna.fbcdn.net/v/t39.30808-6/341097437_757491112660791_8783214212845245248_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHejP1SIECDzXRcWaS5prBnj_CArHlkZ8GP8ICseWRnwX_mUn07biqBsCYrEnE-dxkWiodPw5JUHq8skWBSSBqn&_nc_ohc=jok237fgLsQAX8PavJD&_nc_ht=scontent.flim31-1.fna&oh=00_AfCfabsEBQGhuVnb3xZUl3AwHZcQypFxV7ajljwxNkqGlQ&oe=653DFE18"
        alt="fondo de imagen"
        loading="lazy"
      />
    </>
  );
}

export default Home;
