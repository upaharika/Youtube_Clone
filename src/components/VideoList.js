import React, { useEffect, useState } from "react";

import { FETCH_VIDEOS_URL, GOOGLE_KEY } from "../constant";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_VIDEOS_URL);
    const json = await data.json();
    setVideoList(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videoList.map((video) => (
        <VideoCard videoData={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoList;
