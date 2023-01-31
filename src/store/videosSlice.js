import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videoSlice",
  initialState: {
    videoList: [],
  },
  reducers: {
    cacheVideoList: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { cacheVideoList } = videosSlice.actions;
export default videosSlice.reducer;
