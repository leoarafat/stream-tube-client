import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import Search from "../../component/Search";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div
      className=" xl:mx-0 header bg-gradient-to-r from-[#141e30] to-[#243b55] text-white"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
    >
      <nav>
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
            <input
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="peer hidden"
            />
            <div className="w-full flex justify-between lg:w-max md:px-0">
              <Link to={"/"} className="cursor-pointer">
                <div className="flex md:items-center">
                  <div className="">
                    <img
                      src={
                        "https://i.ibb.co/tQScx8g/play-framework-892738-removebg-preview.png"
                      }
                      alt=""
                      className="w-12"
                    />
                  </div>
                  <div className="hidden lg:flex">
                    <p className="text-lg font-bold">StreamTube</p>
                  </div>
                </div>
              </Link>

              <div className="flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative z-40 px-2 py-3 sm:-mr-6"
                >
                  <div
                    id="line"
                    className="m-auto h-0.5 w-6 rounded bg-red-600 duration-300"
                  ></div>
                  <div
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-red-600 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>

            <label
              role="button"
              htmlFor="toggle_nav"
              className="fixed w-full z-30 h-full top-0 left-0 bg-base-200  bg-opacity-40 hidden peer-checked:block lg:peer-checked:hidden"
            ></label>

            <div
              className="bg-gray-800 flex z-50 flex-col lg:flex-row justify-between 
                    items-center gap-y-4 p-6  lg:w-10/12
                    lg:gap-y-4 lg:p-0 
                    lg:bg-transparent  fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
                    lg:left-0 lg:h-auto w-4/5 md:max-w-none lg:relative lg:first-letter:top-0"
            >
              <div className="flex lg:hidden w-full pb-5">
                <Link to={"/"} className="cursor-pointer">
                  <div className="flex">
                    <div className="">
                      <img
                        src={
                          "https://i.ibb.co/tQScx8g/play-framework-892738-removebg-preview.png"
                        }
                        alt=""
                        className="w-16"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="block w-full h-full lg:h-auto">
                <ul className="space-y-8 tracking-wide font-medium lg:flex lg:items-center lg:space-y-0">
                  <li>
                    <Search />
                  </li>
                  <li>
                    <Link
                      to="#"
                      activeclassName="active"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={2000}
                      className="block md:px-3 group cursor-pointer"
                    >
                      <div
                        className="relative 
                            before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:bg-yellow-500 before:mx-auto before:mt-auto before:rounded-full before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition ">About</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      activeclassName="service"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={2000}
                      className="block md:px-3 group cursor-pointer"
                    >
                      <div
                        className="relative
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:bg-yellow-500 before:mx-auto before:mt-auto before:rounded-full  before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition ">Service</span>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      activeclassName="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={2000}
                      className="block md:px-3 group cursor-pointer"
                    >
                      <div
                        className="relative 
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:bg-yellow-500 before:mx-auto before:mt-auto before:rounded-full  before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition ">Contact</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      activeclassName="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={2000}
                      className="block md:px-3 group cursor-pointer visible lg:hidden"
                    >
                      <div
                        className="relative 
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:bg-yellow-500 before:mx-auto before:mt-auto before:rounded-full  before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition ">
                          <Link to={"/profile"}>Profile</Link>
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full gap-y-4 lg:w-max md:gap-y-0 lg:gap-x-3 flex items-center lg:flex-row flex-col">
                <div className="hidden lg:block dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="">
                      <RiUserLine className="w-8 h-8" />
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
                  </ul>
                </div>

                <div>
                  {user?.email ? (
                    <button
                      onClick={handleLogOut}
                      type="button"
                      title="Sign Out"
                      class="relative inline-flex items-center justify-start px-10 py-3 w-full overflow-hidden font-medium transition-all bg-red-600 rounded-full hover:bg-white group"
                    >
                      <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                      <span class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-red-600">
                        LogOut
                      </span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      title="Sign Out"
                      class="relative inline-flex items-center justify-start px-10 py-3 w-full overflow-hidden font-medium transition-all bg-red-600 rounded-full hover:bg-white group"
                    >
                      <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                      <span class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-red-600">
                        <Link to={"login"}>Login</Link>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
