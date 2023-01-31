import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { hideMenu } from "../store/appSlice";
import CommentSection from "./CommentSection";
import VideoContainer from "./VideoContainer";

const VideoPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div className="col-span-8">
      <VideoContainer />
      <CommentSection />
    </div>
  );
};

export default VideoPage;
