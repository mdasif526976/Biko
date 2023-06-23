import React from "react";
import { Card } from "flowbite-react";
import Carusel from "../../Component/Carusel/Carusel";
const Home = () => {
  return (
    <div id="home">
      <Carusel />
      <Card
        className="max-w-sm"
        href="#"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/355674427_292815053174687_1401112557115320179_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGhnnrWtPBagy3_K3mxTRarvJLtCdZgaJ68ku0J1mBonj_YzcM856Ls5HyMDcXAVx1kYuuys2ThINxDmvcKYdGp&_nc_ohc=ulN8W6P2jrQAX-zyd5g&_nc_ht=scontent.fdac157-1.fna&oh=00_AfC0p7leBx66Z8gMdUxUvz41sJvawbgX7fbIquSSJLjBnw&oe=6499423F"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Noteworthy technology acquisitions 2021</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </p>
      </Card>
    </div>
  );
};

export default Home;
