import React, { useContext, useState } from "react";
import { productContext } from "../../Layout/Dashboard/Dashboard";
import Drag from "../file input/Drag";
import { toast } from "react-toastify";
import { UserContext } from "../../AuthProvider/Authprovider";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const date = format(new Date(), "yyyy-MM-dd");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { product, setProduct, productimges, setImage } =
    useContext(productContext);
  const handler = (e) => {
    e.preventDefault();
    const from = e.target;
    const bikeName = from.bikeName.value;
    const type = from.type.value;
    const usedTime = from.usedTime.value;
    const brand = from.brand.value;
    const descreption = from.descreption.value;
    const phoneNumbar = from.phoneNumbar.value;
    const location = from.location.value;
    const newPrice = from.newPrice.value;
    const oldPrice = from.oldPrice.value;
    console.log(bikeName, type);
    const data = {
      postTime: date,
      sellerName: user.displayName,
      sellerEmail: user.email,
      bikeName: bikeName,
      type: type,
      usedTime: usedTime,
      brand: brand,
      descreption: descreption,
      phoneNumbar: phoneNumbar,
      location: location,
      newPrice: newPrice,
      oldPrice: oldPrice,
      images: productimges,
    };
    setProduct(data);
    toast.success("Go to Overiew");
    from.reset();
  };

  const addProduct = () => {
    if (
      confirm(
        " You should first Click Save Button And Are you Choose photo ?"
      ) == true
    ) {
      fetch("http://localhost:5000/product", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setImage([]);
            navigate("/dashboard/products");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handler}>
      <div className="flex justify-between lg:flex-row flex-col gap-12 items-start">
        <div className="flex flex-col w-full">
          <div className="flex flex-col ">
            <label className="font-bold text-gray-800 text-[16px]">
              Bike Name
            </label>
            <input
              className="w-full py-3 rounded "
              name="bikeName"
              type="text"
              required="true"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-800 text-[16px]">
              Bike Type
            </label>
            <select
              name="type"
              defaultValue="Cycle"
              className="w-full  font-bold py-3 rounded "
            >
              <option className="font-bold py-1">Cycle</option>
              <option className="font-bold py-1">Moutain Bike</option>
              <option className="font-bold py-1">Scooter Bike</option>
              <option className="font-bold py-1">Sports Bike</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-800 text-[16px]">Brand</label>
            <input
              className="w-full py-3 rounded "
              name="brand"
              type="text"
              required="true"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-800 text-[16px]">
              Used Time
            </label>
            <input
              className="w-full py-3 rounded "
              name="usedTime"
              type="text"
              required="true"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-800 text-[16px]">
              Descreption
            </label>
            <textarea
              className="w-full h-56 rounded "
              name="descreption"
              type="text"
              required="true"
            />
          </div>
        </div>
        {/* image and price section */}
        <div className="flex flex-col w-full m-0">
          <div className="flex flex-col ">
            <label className="font-bold text-gray-800 text-[16px] pb-1">
              Product Image
            </label>
            <div className="flex justify-between gap-2">
              <Drag />
              <Drag />
            </div>
            <p className="py-2">Choose Atleast one photo</p>
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col my-4 w-full">
              <label className="font-bold text-gray-800 text-[16px]">
                Old Price
              </label>
              <input
                className="w-full py-3 rounded "
                name="oldPrice"
                type="number"
                required="true"
              />
            </div>
            <div className="flex flex-col my-4 w-full">
              <label className="font-bold text-gray-800 text-[16px]">
                New Price
              </label>
              <input
                className="w-full py-3 rounded "
                name="newPrice"
                type="number"
                required="true"
              />
            </div>
          </div>
          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-800 text-[16px]">
              Location
            </label>
            <input
              className="w-full py-3 rounded "
              name="location"
              type="text"
              required="true"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="font-bold text-gray-800 text-[16px]">
              Phone Numbar
            </label>
            <input
              className="w-full py-3 rounded "
              name="phoneNumbar"
              type="number"
              required="true"
            />
          </div>
          <div className="flex justify-between gap-4">
            <input
              value="Save"
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4
             focus:ring-blue-300 
            font-medium rounded-lg text-xl px-10 py-4 mr-2 mb-2 
             focus:outline-none dark:focus:ring-blue-800"
            />
            <button
              type="button"
              onClick={addProduct}
              class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
            font-medium rounded-lg text-xl px-10 py-4 mr-2 mb-2 
             focus:outline-none dark:focus:ring-blue-800"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
