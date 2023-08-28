import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = data;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add_New_Table: (state, action) => {
      const id = crypto.randomUUID();
      const status = "active";
      return [...state, { id, status, ...action.payload }];
    },
    getUser: (state, action) => {
      state.useradmin = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
