import React, { useContext, useState } from "react";
import { productContext } from "../../Layout/Dashboard/Dashboard";

const Drag = ({ h }) => {
  const { productimges, setImage } = useContext(productContext);
  console.log(productimges);
  const [img, setImg] = useState("");
  console.log(h);
  const [file, setFile] = useState("");
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files;
    const url =
      "https://api.imgbb.com/1/upload?key=9c38704dde4d9490719c06fbbe76f92d";
    console.log(file[0]);
    const from = new FormData();
    from.append("image", file[0]);
    fetch(url, {
      method: "POST",
      body: from,
    })
      .then((res) => res.json())
      .then((imgData) => {
        setImg(imgData.data.url);
        setImage([...productimges, imgData.data.url]);
      })
      .catch((err) => console.log(err));
    setFile(file);
  };
  return (
    <div className="flex items-center justify-center w-full  ">
      {img ? (
        <img className="w-full h-60" src={img} alt="" />
      ) : (
        <label
          // htmlFor="dropzone-file"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          className={`flex flex-col items-center justify-center h-72
         w-full  ${
           file ? "" : "border-2"
         } border-gray-300 border-dashed rounded-lg cursor-pointer
          bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600
           dark:hover:border-gray-500 dark:hover:bg-gray-600`}
        >
          <div
            className={`flex flex-col items-center justify-center py-6  px-5`}
          >
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              Drag and drop here
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      )}
    </div>
  );
};

export default Drag;
