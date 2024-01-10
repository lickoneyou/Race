import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducers/reducer";
import disabledReducer from "../reducers/disabledReducer";
import scoreDisabledReducer from "../reducers/scoreDisabledReducer";
import restartDisableReducer from "../reducers/restartDisableReducer";

const reducers = combineReducers({
  race: reducer,
  disabled: disabledReducer,
  scoreDisabled: scoreDisabledReducer,
  restartDisable: restartDisableReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
