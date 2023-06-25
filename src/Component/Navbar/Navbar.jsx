import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../AuthProvider/Authprovider";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="relative p-5 m-0 flex justify-between items-center">
        <div className="brand">
          <h1 className="font-bold text-2xl">Biko</h1>
        </div>
        <div className="menu hidden md:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive && "border-b-2 border-gray-400 -mb-5"
              } mr-10 hover:border-b-2 hover:border-gray-400 hover:text-violet-600
              text-xl font-normal
                text-black`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catagoris"
            className={({ isActive }) =>
              `${
                isActive && "border-b-2 border-gray-400 -mb-5"
              } mr-10 hover:border-b-2 hover:border-gray-400 hover:text-violet-600
              text-xl font-normal
                text-black`
            }
          >
            Catagoris
          </NavLink>
          {!user?.uid ? (
            <>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-gray-400 -mb-5"
                  } mr-10 hover:border-b-2 hover:border-gray-400 hover:text-violet-600
              text-xl font-normal
                text-black`
                }
              >
                Signup Now
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-gray-400 -mb-5"
                  } mr-10 hover:border-b-2 hover:border-gray-400 hover:text-violet-600
              text-xl font-normal
                text-black`
                }
              >
                Login Now
              </NavLink>
            </>
          ) : (
            <>
              <button
                onClick={() => logout()}
                className="px-3 py-2 mr-10 font-normal text-xl text-red-600"
              >
                Logout
              </button>
            </>
          )}
          <NavLink
            to="/d"
            className={({ isActive }) =>
              `${
                isActive && "border-b-2 border-gray-400 -mb-5"
              } mr-10 hover:border-b-2 hover:border-gray-400 hover:text-violet-600
                text-xl font-normal
                  text-black`
            }
          >
            About us
          </NavLink>
        </div>
        <svg
          onClick={() => setOpen(!isOpen)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:hidden"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* phone menu  */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden z-10 border p-2 basis-8 delay-1000 ease-in  rounded border-gray-500 
        gap-5 absolute w-full justify-center flex-col items-center `}
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${
              isActive ? "!text-blue-600" : ""
            } p-3 border w-full text-xl text-center
             text-black font-semibold shadow-xl rounded`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            `${
              isActive ? "!text-blue-600" : ""
            } p-3 border w-full text-xl text-center
             text-black font-semibold shadow-xl rounded`
          }
        >
          MyCart
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            `${
              isActive ? "!text-blue-600" : ""
            } p-3 border w-full text-xl text-center
             text-black font-semibold shadow-xl rounded`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            `${
              isActive ? "!text-blue-600" : ""
            } p-3 border w-full text-xl text-center
             text-black font-semibold shadow-xl rounded`
          }
        >
          About us
        </NavLink>
        <button
          to="/"
          className="text-red-600 text-xl w-full bg-white p-3 shadow-xl rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
