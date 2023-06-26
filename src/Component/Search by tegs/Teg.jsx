import { Button } from "flowbite-react";
import React from "react";

const Tegs = () => {
  return (
    <div className=" backdrop: py-20 px-20">
      <div className="flex justify-between ">
        <p className="text-6xl font-bold text-blue-900 flex flex-col">
          Find Bikes By Tegs
          <span className="text-sm font-sans pt-5 text-gray-600">
            Explore all of our bikes and pick your suitable ones to buy and
            start ride with us!
          </span>
        </p>
        <Button variant="outlined" className="bg-p px-3 py-2 h-8">
          dfsdfsd
        </Button>
      </div>
      <div className="pt-8 grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="relative border-purple-600 hover:bg-purple-500 h-20 w-[240px] border-[2px]">
          <div className="bg-white shadow-2xl rounded font-semibold p-3 w-full left-2 absolute h-full -top-2 flex gap-3 justify-center items-center">
            <img
              className="w-12 h-12"
              src="https://iili.io/HP6Ityb.md.png"
              alt=""
            />
            <p>Cycle</p>
          </div>
        </div>
        <div className="relative border-purple-600 hover:bg-purple-500 h-20 w-[240px] border-[2px]">
          <div className="bg-white  shadow-2xl rounded font-semibold p-3 w-full left-2 absolute h-full -top-2 flex gap-3 justify-center items-center">
            <img
              className="w-12 h-12"
              src="https://iili.io/HP6u7g1.md.png"
              alt=""
            />
            <p>Moutain Bike</p>
          </div>
        </div>
        <div className="relative border-purple-600 hover:bg-purple-500 h-20 w-[240px] border-[2px]">
          <div className="bg-white  shadow-2xl rounded font-semibold p-3 w-full left-2 absolute h-full -top-2 flex gap-3 justify-center items-center">
            <img
              className="w-12 h-12"
              src="https://iili.io/HP6AH21.md.png"
              alt=""
            />
            <p>Scooter Bike</p>
          </div>
        </div>
        <div className="relative border-purple-600 hover:bg-purple-500 h-20 w-[240px] border-[2px]">
          <div className="bg-white  shadow-2xl rounded font-semibold p-3 w-full left-2 absolute h-full -top-2 flex gap-3 justify-center items-center">
            <img
              className="w-12 h-12"
              src="https://iili.io/HP659Og.md.png"
              alt=""
            />
            <p>Sports Bike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tegs;
