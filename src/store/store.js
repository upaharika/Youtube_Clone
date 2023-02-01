import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import videosSlice from "./videosSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videosSlice,
    chat: chatSlice,
  },
});
