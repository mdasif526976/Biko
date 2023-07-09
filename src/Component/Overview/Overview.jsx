import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../Layout/Dashboard/Dashboard";
import { styled } from "styled-components";
import "react-photo-view/dist/react-photo-view.css";
import phone from "../../image utilites/phone.png";
import shield from "../../image utilites/shield.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  HiOutlineClipboard,
  HiBan,
  HiArrowUp,
  HiShoppingBag,
} from "react-icons/hi";

const Overview = (props) => {
  const { product, productimges } = useContext(productContext);
  console.log(product);
  const {
    postTime,
    sellerName,
    phoneNumbar,
    bikeName,
    brand,
    descreption,
    images,
    location,
    newPrice,
    oldPrice,
    type,
    usedTime,
  } = product;
  const [image, setimage] = useState(productimges && productimges[1]);

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <div className="bg-slate-50 p-5 shadow-2xl  rounded-xl">
      <Header>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">
            {bikeName ? bikeName : "Bike Name"}
          </h1>
          <p className="text-xl font-thin">
            {postTime ? postTime : "0-0-200?"},
            {location ? location : "Your location"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex gap-2 text-xl items-center">
            Copy Link{" "}
            <span>
              <HiOutlineClipboard className="h-8 w-8" />
            </span>
          </button>
          <button className="flex gap-2 text-xl items-center">
            Add to Cart{" "}
            <span>
              <HiShoppingBag className="w-8 h-8 " />
            </span>
          </button>
        </div>
      </Header>
      <div
        className=" grid grid-cols-1 items-center md:grid-cols-3
    justify-between gap-5 "
      >
        <div className="flex flex-col mt-4 gap-8 col-span-2">
          <div className="p-5 border rounded w-full ">
            {image && (
              <PhotoProvider>
                <PhotoView src={image}>
                  <img src={image} className="w-full rounded h-80" alt="" />
                </PhotoView>
              </PhotoProvider>
            )}
          </div>
          <div className="photos flex gap-3 justify-between shadow-xl border-2 p-5 rounded">
            {productimges &&
              productimges?.map((image, i) => {
                return (
                  <img
                    className="w-20 bg-white h-20  rounded border p-2"
                    key={i}
                    onClick={() => setimage(image)}
                    src={image}
                    alt=""
                  />
                );
              })}
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-xl font-normal py-3">
                Used Time : {usedTime ? usedTime : "6 month (default)"}
              </p>
              <div className="flex gap-4">
                <p className="text-xl font-normal py-3">
                  Type : {type ? type : "Bike"}
                </p>
                <p className="text-xl font-normal py-3">
                  Brand : {brand ? brand : "Brand"}
                </p>
              </div>
              <p className="font-bold text-3xl text-yellow-400">
                {" "}
                <del className="text-xl">
                  {oldPrice ? oldPrice : "1000"}
                </del>{" "}
                <span>{newPrice ? newPrice : "800"} Tk</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <p className="p-2 border mt-4 text-[17px] ">
            For sale by{" "}
            <span className="font-bold">
              {sellerName ? sellerName : "Seller Name"}
            </span>
          </p>
          <p className="p-3 border flex text-xl font-bold iteams-center gap-2">
            <span>
              <img className="w-8 h-8" src={phone} alt="" />
            </span>
            <span>{phoneNumbar ? phoneNumbar : "01XXXXXXXXXX"}</span>
          </p>
          <div className="mt-6 p-4 border border-green-500 rounded">
            <h4 className="flex gap-2 iteams-center">
              <img className="w-8 h-8 " src={shield} alt="" />
              <span className="text-xl text-green-400 font-semibold">
                Safety tips
              </span>
            </h4>
            <ul className="text-xl">
              <li className="py-2">Meet in a safe & public place.</li>
              <li>Don’t pay in advance.</li>
            </ul>
            <p className="underline text-green-400 pt-3 text-2xl text-right ">
              See all safety tips
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 w-full ">
        <h1 className="text-xl font-bold">Descreption:</h1>
        <p className="border-b-2 my-3"></p>
        <p className="text-xl font-normal">
          {descreption
            ? descreption
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam, sapiente, similique nesciunt animi error magnam voluptate qui harum nam esse nisi sapiente, similique nesciunt animi error magnam voluptate qui harum nam esse nisisapiente, similique nesciunt animi error magnam voluptate qui harum nam esse nisisapiente, similique nesciunt animi error magnam voluptate qui harum nam esse nisisapiente, similique nesciunt animi error magnam voluptate qui harum nam esse nisisapiente, similique nesciunt animi error magnam voluptate qui harum nam esse nisisapiente, similique nesciunt animi error magnam voluptate qui harum nam esse nisisapiente, similique nesciunt animi error magnam voluptate qui harum nam esse nisi repellat dolore quam dolores. Dolorum mollitia excepturi voluptate! (default text) ."}
        </p>
        <div className="mt-12 mb-2">
          <p className="border-t-2 pb-3"></p>
          <div className="flex justify-start gap-3">
            <button
              className="text-white rounded py-3 px-5 text-xl items-center
             font-bold flex bg-[#f4f422]"
            >
              <HiArrowUp className="h-8 w-8 text-white gap-1" /> Promote this ad
            </button>

            <button className="text-white rounded py-3 px-5 text-xl font-bold flex bg-red-600 items-center">
              <HiBan className="h-8 w-8 text-white" /> Report this ad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
