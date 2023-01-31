import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videosSlice,
  },
});
