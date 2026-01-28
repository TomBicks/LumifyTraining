import { configureStore } from "@reduxjs/toolkit";
// import reducers
//NOTE!! To import the default (in this case the reducer), you can't have the variable you're importing to be surrounded by curly braces; '{ topicsReducer }' will *not* work
import topicsReducer from "../features/topics/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer
  },
});
