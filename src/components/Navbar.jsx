import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className=" md:rounded-div flex items-center justify-between h-20 font-bold px-2">
      <Link to="/">
        <h1 className="text-2xl">Cryptoboss</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {user?.email ? (
        <div>
          <Link to="/account" className="hidden md:block p-4">
            Account
          </Link>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link to="/signin" className="p-4 hover:text-accent">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? null : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 flex flex-col items-center justify-between w-full h-full bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li onClick={handleNav} className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleNav} className="border-b py-6">
            <Link to="/account">Account</Link>
          </li>
          <li className=" py-6 border-b">
            <ThemeToggle />
          </li>

          <div className="flex flex-row pt-4 pb-2 ">
            <li>
              <Link to="/signin">
                <button
                  onClick={handleNav}
                  className="flex my-2  py-3 px-10 mr-11 ml-5 bg-primary text-primary border border-secondary rounded-2xl shadow-xl"
                >
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Link onClick={handleNav} to="/signup">
                <button className="flex my-2 py-3 px-10 bg-button text-btnText rounded-2xl shadow-xl">
                  Sign Up
                </button>
              </Link>
            </li>
          </div>
          <li>
            <button className=" py-8 ml-20 pl-14" onClick={handleNav}>
              Close Tab
            </button>
          </li>
        </ul>
        {/* <div className="flex flex-col w-full h-screen inline-block p-4"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
