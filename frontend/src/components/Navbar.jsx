import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:5000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <nav className="w-[95%] mx-auto mt-4 bg-white shadow-lg rounded-full px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="h-16 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Links */}
        <div
          className={`${
            show ? "flex" : "hidden"
          } md:flex items-center gap-8 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 rounded-2xl`}
        >
          <div className="flex flex-col md:flex-row gap-4 font-medium text-gray-700">
            <Link
              to="/"
              onClick={() => setShow(!show)}
              className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/appointment"
              onClick={() => setShow(!show)}
              className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition duration-300"
            >
              Appointment
            </Link>

            <Link
              to="/about"
              onClick={() => setShow(!show)}
              className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition duration-300"
            >
              About Us
            </Link>
          </div>

          {/* Auth Button */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="mt-4 md:mt-0 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 shadow-md hover:shadow-lg"
            >
              LOGOUT
            </button>
          ) : (
            <button
              onClick={goToLogin}
              className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              LOGIN
            </button>
          )}
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden text-2xl cursor-pointer text-gray-700 hover:text-blue-600 transition"
          onClick={() => setShow(!show)}
        >
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
