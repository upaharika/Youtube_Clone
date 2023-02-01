import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: ["Upaharika: Hi Viewer..!", "Viewer: Hello Upharika!"],
  reducers: {
    addItem: (state, action) => {
      state.splice(20, 1);
      state = state.unshift(action.payload);
    },
  },
});

export const { addItem } = chatSlice.actions;

export default chatSlice.reducer;
