import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  email: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
      state.token = "123214";
    },
    logOff: () => initialState,
  },
});

// Public'e çekiyoruz
export const { login, logOff } = userSlice.actions;
export default userSlice.reducer;

// Selectors
export const selectEmail = (state: RootState) => state.user.email;
