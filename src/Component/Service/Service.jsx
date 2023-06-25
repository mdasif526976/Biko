import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import {} from "@heroicons/react/24/outline";
// import { ClockIcon } from "@heroicons/react/24/outline";
const Service = () => {
  return (
    <div className="p-2 rounded bg-slate-50">
      <h1 className="text-center text-3xl py-2 font-bold">Why you Choose Us</h1>
      <hr />
      <div className="grid grid-cols-4 justify-between gap-6 p-14">
        <div className="bg-violet-500 p-4 rounded flex items-center gap-3 flex-col text-white">
          <ClockIcon className="w-12 h-12 t" />
          <p className="flex text-xl font-semibold flex-col gap-2">
            24 hours Delivary{" "}
            <span className="font-normal text-[16px]">
              We give your product under 24 hours .
            </span>
          </p>
        </div>
        <div className="bg-pink-500 p-4 rounded flex flex-col gap-3 items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

          <p className="flex text-xl font-semibold flex-col gap-2">
            We are your Friendly{" "}
            <span className="font-normal text-[16px]">
              We talk Customers like Friendly .
            </span>
          </p>
        </div>
        <div className="bg-blue-500 p-4 rounded flex flex-col items-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 text-white h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>

          <p className="flex text-xl font-semibold flex-col gap-2">
            Easy return Product{" "}
            <span className="font-normal text-[16px]">
              You can easy return Product from your home.
            </span>
          </p>
        </div>
        <div className="bg-indigo-500 p-4 rounded flex flex-col gap-3 items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>

          <p className="flex text-xl font-semibold flex-col gap-2">
            Best Quality Product{" "}
            <span className="font-normal text-[16px]">
              We give you best quality product in our site .
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
