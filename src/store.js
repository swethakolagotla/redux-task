import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice";
import todo from "./todo";
export default configureStore({
  reducer: {
    counter: counter ,
    todos:todo
  },
});
