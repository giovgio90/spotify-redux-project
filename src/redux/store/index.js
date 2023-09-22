import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import musicReducer from "../reducers/musicReducer";

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
  middleware: [thunk],
});

export default store;
