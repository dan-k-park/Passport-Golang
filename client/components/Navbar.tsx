import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

export const Navbar: React.FC<{}> = ({}) => {
  const { user, logout } = useAuthContext();
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      logout();
    } catch (error) {
      console.error(error);
    }
  };

  const renderContent = () => {
    if (router.route == "/login") {
      return;
    }

    return user ? (
      <>
        <div className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
          My Trips
        </div>
        <div
          onClick={handleLogout}
          className="py-4 px-2 text-gray-500 font-semibold cursor-pointer hover:text-green-500 transition duration-300"
        >
          Logout
        </div>
      </>
    ) : (
      <div className="hidden md:flex items-center space-x-3 ">
        <div className="py-2 px-2 font-semibold text-gray-500 cursor-pointer hover:text-green-500 transition duration-300">
          <NextLink href="/login">Log In</NextLink>
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-lg sticky">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="cursor-pointer">
            <NextLink href="/">
              <div className="flex items-center py-4 px-2">
                <span className="font-bold text-gray-500 text-lg">
                  Passport
                </span>
              </div>
            </NextLink>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {renderContent()}
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={handleClick}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openNav ? (
        <div className="mobile-menu">
          <ul className="">
            <li className="active">
              <div className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                Trips
              </div>
            </li>
            {user ? (
              <li>
                <div
                  onClick={handleLogout}
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Log Out
                </div>
              </li>
            ) : (
              <li>
                <div className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Log In
                </div>
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
