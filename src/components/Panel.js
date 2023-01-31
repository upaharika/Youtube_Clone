import React from "react";
import { useSelector } from "react-redux";

const Panel = () => {
  const toggleMenu = useSelector((store) => store.app.toggleMenu);
  return !toggleMenu ? null : (
    <div className="col-span-2 p-10 shadow-md">
      <ul className="h-96 p-3">
        <li className="p-4">Trending</li>
        <li className="p-4">Live</li>
        <li className="p-4">Subscriptions</li>
        <li className="p-4">Channels</li>
      </ul>
    </div>
  );
};

export default Panel;
