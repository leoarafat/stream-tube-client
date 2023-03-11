import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsCloudSun, BsMoonStars, BsSearchHeart } from "react-icons/bs";
import { TfiVideoClapper } from "react-icons/tfi";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";
import { RiUserLine } from "react-icons/ri";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div
        className="navbar text-white bg-gradient-to-r from-[#141e30] to-[#243b55] flex justify-between p-5 "
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
      >
        <div className="">
          <Link to={"/"} className="btn btn-ghost normal-case text-2xl">
            <TfiVideoClapper className="w-8 h-8 mr-1" />
            StrTube
          </Link>
        </div>
        <div>
          <div className="relative ml-3">
            <input
              type="text"
              placeholder="Search for video near you"
              className="py-2 pl-8 pr-4 block w-full rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:bg-white focus:border-gray-300"
            />
            <BsSearchHeart className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <MdOutlineNotificationsNone className="w-8 h-8" />

                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-gradient-to-r from-[#141e30] to-[#243b55] shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Notification: 999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    Whats new
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="">
                <RiUserLine className="w-10 h-10" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-[#141e30] to-[#243b55] rounded-box w-52"
            >
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              {user?.uid ? (
                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
              ) : (
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
