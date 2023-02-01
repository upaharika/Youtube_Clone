import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { hideMenu } from "../store/appSlice";
import ChatContainer from "./ChatContainer";
import CommentSection from "./CommentSection";
import VideoContainer from "./VideoContainer";

const VideoPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div className="col-span-12">
      <div className="flex p-10">
        <VideoContainer />
        <ChatContainer />
      </div>
      <CommentSection />
    </div>
  );
};

export default VideoPage;
