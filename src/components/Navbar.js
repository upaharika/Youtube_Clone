import React from "react";
import { useDispatch } from "react-redux";
import { handleToggleMenu } from "../store/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(handleToggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg grid-cols-12">
      <div className="col-span-1 p-5">
        <img
          className="w-10 cursor-pointer mt-4"
          onClick={toggleHandler}
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
        />
      </div>
      <div className="col-span-1">
        <img
          alt=""
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
        />
      </div>
      <div className="col-span-8 p-5">
        <input
          className="bg-gray-50 border text-gray-800 border-gray-300 rounded-lg w-full p-2 mt-4"
          type="text"
          placeholder="search"
        />
      </div>
      <div className="col-span-1 p-5 mt-4">
        <img
          className="w-20 rounded-full h-14"
          alt=""
          src="https://img.favpng.com/3/10/20/people-happy-png-favpng-JaetsaWFJLkM5FjXSXSN4Yicc.jpg"
        />
      </div>
      <div className="col-span-1 p-5 mt-4">
        <img
          className="w-10 h-14"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
        />
      </div>
    </div>
  );
};

export default Navbar;
