import React from "react";
import { Card } from "flowbite-react";
import Carusel from "../../Component/Carusel/Carusel";
import Catagoris from "../../Component/Catagoris/Catagoris";
import Service from "../../Component/Service/Service";
import Review from "../../Component/Review/Review";
const Home = () => {
  return (
    <div id="home">
      <Carusel />
      <Service />
      <Catagoris />
      <Review />
    </div>
  );
};

export default Home;
