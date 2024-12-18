import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import savedReducer from "./savedReducer";

const rootReducer = combineReducers({
  news: newsReducer, // Reducer untuk berita
  saved: savedReducer, // Reducer untuk berita yang di-save
});

export default rootReducer;
