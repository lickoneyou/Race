import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducers/reducer";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
