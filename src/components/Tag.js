import React from "react";

const Tag = ({ tagName }) => {
  return (
    <button className="px-4 py-2 m-1 bg-slate-300 rounded-lg">{tagName}</button>
  );
};

export default Tag;
