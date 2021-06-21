import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    navOpen: false,
  },
  reducers: {
    navOpenTrue: (state) => {
      state.navOpen = true;
    },
    navOpenFalse: (state) => {
      state.navOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { navOpenTrue, navOpenFalse } = navSlice.actions;

export default navSlice.reducer;
