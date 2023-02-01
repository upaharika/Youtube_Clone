import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    toggleMenu: true,
  },
  reducers: {
    handleToggleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
    hideMenu: (state) => {
      state.toggleMenu = false;
    },
    showMenu: (state) => {
      state.toggleMenu = true;
    },
  },
});

export const { handleToggleMenu, hideMenu, showMenu } = appSlice.actions;

export default appSlice.reducer;
