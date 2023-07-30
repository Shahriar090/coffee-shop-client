import React from "react";
import { Link } from "react-router-dom";
import navImage from "../../assets/navImg.jpg"

const Navbar = () => {
  const navOptions = (
    <>
      <li className="text-lg text-white font-semibold ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg text-white font-semibold ">
        <Link to="/addCoffee">Add Coffee</Link>
      </li>

      <li className="text-lg text-white font-semibold ">
        <Link to="/updateCoffee">Update Coffee</Link>
      </li>

      <li className="text-lg text-white font-semibold ">
        <Link to="/updateCoffee">Blog</Link>
      </li>

      <li className="text-lg text-white font-semibold ">
        <Link to="/updateCoffee">Shop</Link>
      </li>

      <li className="text-lg text-white font-semibold ">
        <Link to="/updateCoffee">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-red-950">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-950 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
       <div className="parent flex gap-2 p-4">
       <div className="nav-img">
          <img
            src={navImage}
            alt="" className="h-8 w-16 lg:h-20 lg:w-20 rounded-full"
          />
        </div>
        <div className="title text-white my-auto font-bold font-serif text-xl">
            Coffee Corner
        </div>
       </div>
      </div>
      <div className="navbar-end hidden lg:flex hover:bg-red-700">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
