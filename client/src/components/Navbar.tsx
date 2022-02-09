import React, { useState } from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [openNav, setOpenNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const renderContent = () => {
    return loggedIn ? (
      <>
        <div className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
          My Trips
        </div>
        <div
          onClick={handleLogout}
          className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
        >
          Logout
        </div>
      </>
    ) : (
      <div className="hidden md:flex items-center space-x-3 ">
        <div
          onClick={handleLogin}
          className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
        >
          Log In
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-lg sticky">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">
                Passport
              </span>
            </a>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
            {loggedIn ? (
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
                <div
                  onClick={handleLogin}
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
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
