import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducers/reducer";
import disabledReducer from "../reducers/disabledReducer";

const reducers = combineReducers({
  race: reducer,
  disabled: disabledReducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
