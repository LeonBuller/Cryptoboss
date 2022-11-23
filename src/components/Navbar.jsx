import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SignIn from "../context/routes/SignIn";
import SignUp from "../context/routes/SignUp";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Cryptoboss</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="hidden md:block">
        <Link className="p-4 hover:text-accent" to="/signin">
          Sign in
        </Link>
        <Link
          className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          to="/signup"
        >
          Sign Out
        </Link>
      </div>
      {/* Menu Icon */}
      <div>
        <AiOutlineMenu />
      </div>
      {/* Mobile Menu */}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div>
          <Link to="/signin">
            <button>sign In</button>
          </Link>
          <Link to="/signout">
            <button>sign Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
