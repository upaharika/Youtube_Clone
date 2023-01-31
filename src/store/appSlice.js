import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    toggleMenu: true,
  },
  reducers: {
    handleToggleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
  },
});

export const { handleToggleMenu } = appSlice.actions;

export default appSlice.reducer;
