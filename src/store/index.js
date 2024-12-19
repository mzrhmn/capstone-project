import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/reducer";
import saveReducer from "./saved/reducer";

const store = configureStore({
  reducer: {
    news: newsReducer,
    save: saveReducer
  },
});

export default store;
