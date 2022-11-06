import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Utility/logo.svg";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { AuthContext } from "../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Log Out success");
        localStorage.removeItem('userAccess')
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="w-[85%] mx-auto">
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to={"/"}
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img className="h-14" src={logo} alt="" />
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                About
              </Link>
            </li>
            <li className="flex">
              <Link
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Services
              </Link>
            </li>
            <li className="flex">
              <Link
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Blog
              </Link>
            </li>
            <li className="flex">
              <Link
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex gap-10">
            <div className="flex gap-5">
             <Link to={'/confirmOrder'}> <FaShoppingBag /></Link>
              <FaSearch />
            </div>
            <button className="border border-[#FF3811] p-2 text-[#FF3811] font-bold">
              Appointment
            </button>
            {user?.uid ? (
              <>
                <Link onClick={handleLogOut}>Log Out</Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
