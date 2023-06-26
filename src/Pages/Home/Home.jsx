import React from "react";
import { Card } from "flowbite-react";
import Carusel from "../../Component/Carusel/Carusel";
import Catagoris from "../../Component/Catagoris/Catagoris";
import Service from "../../Component/Service/Service";
import Review from "../../Component/Review/Review";
import Tegs from "../../Component/Search by tegs/Teg";
const Home = () => {
  return (
    <div id="home">
      <Carusel />
      <Tegs />
      <Service />
      <Catagoris />
      <Review />
    </div>
  );
};

export default Home;
