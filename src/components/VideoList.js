import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FETCH_VIDEOS_URL } from "../constant";
import { showMenu } from "../store/appSlice";
import { cacheVideoList } from "../store/videosSlice";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const videoList = useSelector((store) => store.videos.videoList);
  const dispatch = useDispatch();

  useEffect(() => {
    !videoList?.length && fetchData();
    dispatch(showMenu());
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_VIDEOS_URL);
    const json = await data.json();
    dispatch(cacheVideoList(json.items));
  };

  return !videoList?.length ? (
    <h1>No Videos Found</h1>
  ) : (
    <div className="flex flex-wrap">
      {videoList.map((video) => (
        <VideoCard videoData={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoList;
