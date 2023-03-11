import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsCloudSun, BsMoonStars, BsSearchHeart } from "react-icons/bs";
import { TfiVideoClapper } from "react-icons/tfi";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";
import { RiUserLine } from "react-icons/ri";
import axios from "axios";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const [searchTerm, setSearchTerm] = useState("");

  const searchRef = useRef();
  const handleSearch = async () => {
    setSearchTerm(searchRef.current.value);
  };
  console.log(searchTerm);

  return (
    <div>
      <div
        className="navbar text-white bg-gradient-to-r from-[#141e30] to-[#243b55] flex justify-between p-5 "
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
      >
        <div className="">
          <Link to={"/"} className="btn btn-ghost normal-case text-2xl">
            {/* <TfiVideoClapper className="w-8 h-8 mr-1" /> */}
            <img
              className="w-10"
              src="https://i.ibb.co/tQScx8g/play-framework-892738-removebg-preview.png"
              alt=""
            />
            <span className="text-gray-300">StreamTube</span>
          </Link>
        </div>
        <div>
          <div className=" ml-3"></div>
        </div>
        <div className="">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <MdOutlineNotificationsNone className="w-6 h-6" />

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
