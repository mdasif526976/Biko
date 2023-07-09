import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Tooltip } from "flowbite-react";
const Drawer = ({ userData, menu }) => {
  console.log(userData.account);
  const [open, setOpen] = useState(true);
  const type = userData.account;
  console.log(menu);
  const navigate = useNavigate();
  const [path, setpath] = useState(true);
  useEffect(() => {
    if (type == "Seller" && path == true) {
      navigate("/dashboard/products");
      setpath(false);
      console.log(path);
    } else if (type == "Admin" && path == true) {
      navigate("/dashboard/users");
      setpath(false);
    }
  }, [path, type]);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "md:w-72 w-80" : "w-20 "
        } bg-gray-200 h-screen p-3 pt-8 relative z-10 duration-300`}
      >
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`absolute cursor-pointer -right-4 top-9 
            border-2 border-emerald-100 text-violet-800 w-8 h-8 rounded-full  ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        <div
          className={`flex gap-x-4 items-center md:flex-row flex-col ${
            open && "space-y-6"
          }`}
        >
          <img
            src={userData.image}
            className={`cursor-pointer duration-500 rounded-xl ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black font-bold origin-left flex flex-col text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {userData.name}
            <span className="text-sm font-thin">role:{userData.account}</span>
          </h1>
        </div>
        <ul className="pt-6">
          {menu?.map((Menu, index) => (
            <Link to={`/dashboard/${Menu.to}`}>
              <Tooltip content={Menu.title} placement="right">
                <li
                  data
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white
               text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  <img
                    className="w-6 h-6 md:w-10 md:h-10"
                    src={`${Menu.src}`}
                  />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-black lg:text-xl font-semibold duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              </Tooltip>
            </Link>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Drawer;
