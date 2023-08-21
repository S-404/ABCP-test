import { IUser } from "../models/IUser.ts";
import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi.ts";


interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.fetchUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      },
    );
  },
});


export default userSlice.reducer;