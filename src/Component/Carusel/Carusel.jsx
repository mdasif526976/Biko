import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import { Pagination } from "swiper";

const Carusel = () => {
  return (
    <div className="rounded-xl my-5">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[600px] ">
          <img
            src="https://img.freepik.com/free-photo/handsome-man-biker-travelling-mototrcycle_1303-22150.jpg?size=626&ext=jpg&ga=GA1.1.1864503035.1684944842&semt=ais"
            className="w-full h-52"
          ></img>
        </SwiperSlide>
        <SwiperSlide className="h-[600px]">
          <img
            src="https://img.freepik.com/free-photo/funny-male-scooter-driver-poses-scooter-keeps-legs-sideways-wears-protective-helmet-white-t-shirt-blue-shorts-carries-rucksack-shoulders-isolated-yellow-background_273609-32475.jpg?size=626&ext=jpg&ga=GA1.1.1864503035.1684944842&semt=ais"
            className="w-full h-52"
          ></img>
        </SwiperSlide>
        <SwiperSlide className="h-[600px]">
          <img
            src="https://img.freepik.com/free-photo/african-man-with-bicycle-standing-white-wall_171337-13011.jpg?size=626&ext=jpg&ga=GA1.2.1864503035.1684944842&semt=ais"
            className="w-full h-52"
          ></img>
        </SwiperSlide>
        <SwiperSlide className="h-[600px]">
          <img
            src="https://img.freepik.com/free-photo/motorcyclist-biking-road_114579-5069.jpg?size=626&ext=jpg&ga=GA1.2.1864503035.1684944842&semt=ais"
            className="w-full h-52"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carusel;
