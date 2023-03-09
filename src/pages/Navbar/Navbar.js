import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsCloudSun, BsMoonStars, BsSearchHeart } from "react-icons/bs";
import { TfiVideoClapper } from "react-icons/tfi";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const handleDark = () => {
    setDark(!dark);
    localStorage.setItem("dark-mode", !dark);
  };

  useEffect(() => {
    const localDark = JSON.parse(localStorage.getItem("dark-mode"));
    setDark(localDark);
  }, []);
  useEffect(() => {
    if (dark) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "mytheme");
    }
  }, [dark]);
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between p-5">
        <div className="">
          <TfiVideoClapper className="w-8 h-8" />
          <Link to={"/"} className="btn btn-ghost normal-case text-2xl">
            StreamTube
          </Link>
        </div>
        <div>
          <div onClick={handleDark}>
            {dark ? (
              <BsCloudSun className="h-6 w-6" />
            ) : (
              <BsMoonStars className="h-6 w-6" />
            )}
          </div>
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
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
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
              <div className="w-10 rounded-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYu9wI5JhmD4tqCG6nBJYvpIFL6I-iXE5WTrCXh-w&s"
                  alt=""
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              {user?.uid ? (
<li >
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
