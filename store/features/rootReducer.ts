import { combineReducers } from "@reduxjs/toolkit";
import FeedsReducer from "@/store/features/feed/feedsSlice";

export const rootReducer = combineReducers({
  [FeedsReducer.name]: FeedsReducer.reducer,
});
