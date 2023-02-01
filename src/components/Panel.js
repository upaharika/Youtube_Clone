import React from "react";
import { useSelector } from "react-redux";

const Panel = () => {
  const toggleMenu = useSelector((store) => store.app.toggleMenu);
  return !toggleMenu ? null : (
    <div className="col-span-2 p-10 shadow-md">
      <ul className="h-96 p-3">
        <li className="p-4 text-[20px] font-bold cursor-pointer">Trending</li>
        <li className="p-4 text-[20px] font-bold cursor-pointer">Live</li>
        <li className="p-4 text-[20px] font-bold cursor-pointer">
          Subscriptions
        </li>
        <li className="p-4 text-[20px] font-bold cursor-pointer">Channels</li>
        <li className="p-4 text-[20px] font-bold cursor-pointer">Music</li>
        <li className="p-4 text-[20px] font-bold cursor-pointer">Comedy</li>
        <li className="p-4 text-[20px] font-bold cursor-pointer">History</li>
      </ul>
    </div>
  );
};

export default Panel;
