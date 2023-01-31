import React from "react";

const Comment = ({ comments }) => {
  const { name, comment } = comments;
  return (
    <div className="bg-slate-200 m-2 p-3 rounded-md">
      <h1 className="font-bold">{name}</h1>
      <h2>{comment}</h2>
    </div>
  );
};

export default Comment;
