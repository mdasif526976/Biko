import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import TabsWithUnderline from "../../Layout/Dashboard/Tabs";

const AddProductPage = () => {
  const handleAdd = (data) => {};
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl py-3 font-bold">Add A Product</h1>
        <Button
          className="text-2xl font-bold"
          gradientDuoTone="greenToBlue"
          outline
        >
          Open Ducumention
        </Button>
      </div>
      <p className="text-[15px] py-4 text-gray-600">
        Dear Seller, Please Read our Ducumention properly & explore our feature
        Select Query for first show your product.
      </p>
      <hr />
      {/* Add products and tabs */}
      <TabsWithUnderline />
    </div>
  );
};

export default AddProductPage;
