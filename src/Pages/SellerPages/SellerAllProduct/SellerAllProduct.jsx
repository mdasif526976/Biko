import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserContext } from "../../../AuthProvider/Authprovider";
import { AiOutlineDelete } from "react-icons/ai";
import { Tooltip } from "flowbite-react";

const SellerAllProduct = () => {
  const { user } = useContext(UserContext);
  console.log(user.email);
  const {
    isLoading,
    error,
    data = [],
  } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(`http://localhost:5000/products/${user.email}`).then((res) => {
        return res.json();
      }),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  //  delete Product
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(id);
  };
  return (
    <div>
      <h1 className="py-2 px-1 text-4xl text-center font-bold text-[cyan]">
        My Products
      </h1>
      <div className="border-t-2 py-2 border-dashed border-[cyan]"></div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 text-xl">
                Bike Name
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                Image
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                Category
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                Price
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                <span>Post Time</span>
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((p) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {p.bikeName}
                  </th>
                  <td className="px-4 py-4">
                    <img
                      className="w-16 h-16 rounded"
                      src={p?.images[0]}
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-4">{p?.type}</td>
                  <td className="px-4 py-4">{p?.newPrice}</td>
                  <td className="px-4 py-4">{p?.postTime}</td>
                  <td className="px-4 py-4">
                    <Tooltip content="Delete Product">
                      <button onClick={() => handleDelete(p._id)}>
                        <AiOutlineDelete className="h-8 w-8 text-red-700" />
                      </button>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerAllProduct;
