import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoData }) => {
  const { snippet, id } = videoData;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <Link to={"/watch?v=" + id}>
      <div className="grid grid-flow-row w-72 p-1 m-1 shadow-lg">
        <div>
          <img alt="" src={thumbnails?.medium?.url} />
        </div>
        <div>
          <h1 className="font-bold">{channelTitle}</h1>
          <h2>{title}</h2>
          <h2>{publishedAt}</h2>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
