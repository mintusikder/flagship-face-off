import React from "react";
import { Link, NavLink } from "react-router";
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
const NavBar = () => {
  const nav = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600 underline" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600 underline" : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600 underline" : ""
          }
          to={"/cart"}
        >
          <IoMdCart size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600 underline" : ""
          }
          to={"/favorites"}
        >
          <MdBookmarkAdd size={20} />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer mr-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link to={"/"} className="text-xl font-bold">
          FlagshipFaceOff
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
    </div>
  );
};

export default NavBar;
