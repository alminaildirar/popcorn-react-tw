import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="shadow-tabBox2">
      <div className="container mx-auto flex items-center justify-between pt-2 pb-2 text-red-600">
        <div className="aspect-square flex items-center w-16 h-16 ml-5 ">
          <Link to="/" className="group flex items-center">
            <div className="aspect-square w-16 h-16 ml-5 ">
              <img
                className="w-full h-full"
                src="../images/popcorn.png"
                alt="popcorn-logo"
              />
            </div>
            <span className="text-white opacity-0 text-xl group-hover:opacity-100 ease-in-out duration-300">
              popcorn
            </span>
          </Link>
        </div>
        <div className="mr-5 flex items-center gap-6">
          <Link
            to="/popular-movies"
            className={
              splitLocation[1] === "popular-movies"
                ? "text-white border-b-2 border-white"
                : ""
            }
          >
            <p className="text-xl hover:scale-125 ease-in-out duration-300">
              Popular
            </p>
          </Link>
          <Link
            to="/top-rated-movies"
            className={
              splitLocation[1] === "top-rated-movies"
                ? "text-white border-b-2 border-white"
                : ""
            }
          >
            <p className="text-xl hover:scale-125 ease-in-out duration-300">
              Top Rated{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
