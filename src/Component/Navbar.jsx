import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  const [useropen, setUseropen] = useState(false);
  const navItem = (
    <>
      <li className="lg:ml-4 mt-4 lg:mt-0">
        <NavLink
          to={"/tourists-spots"}
          className={({ isActive }) =>
            isActive ? "bg-green-500" : "bg-red-400 hover:bg-red-500"
          }
        >
          TouristsSpot
        </NavLink>
      </li>
      <li className="lg:ml-4 mt-4 lg:mt-0">
        <NavLink
          to={"/add-tourists-spots"}
          className={({ isActive }) =>
            isActive ? "bg-green-500" : "bg-red-400 hover:bg-red-500"
          }
        >
          Add Spot
        </NavLink>
      </li>
      <li className="lg:ml-4 mt-4 lg:mt-0">
        <NavLink
          to={"/my-add-spot"}
          className={({ isActive }) =>
            isActive ? "bg-green-500" : "bg-red-400 hover:bg-red-500"
          }
        >
          My Add Sopt
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              {navItem}
            </ul>
          </div>
          <NavLink className={"btn btn-ghost"} to={"/"}>
            F tour
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div onClick={() => setUseropen(!useropen)} className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2 cursor-pointer">
                <img
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
          ) : (
            <Link className="btn btn-primary" to={"/login"}>
              Log in
            </Link>
          )}


          {/* user open */}

          <div className={`${useropen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} absolute h-[100px] bg-amber-700 top-[60px] right-[30px] transition duration-400 rounded-2xl p-3 `}>
            <h1>Hi {user && user?.displayName}</h1>
            <button className="btn btn-primary">Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
