import React from "react";
import TagList from "./TagList";
import VideoList from "./VideoList";

const Body = () => {
  return (
    <div className="col-span-12 m-5 w-full">
      <div>
        <TagList />
      </div>
      <div>
        <VideoList />
      </div>
    </div>
  );
};

export default Body;
