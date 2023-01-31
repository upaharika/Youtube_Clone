import React from "react";
import { useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <div className="p-10">
      <iframe
        width="1400"
        height="600"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
