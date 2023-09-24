import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import musicReducer from "../reducers/musicReducer";
import albumPageReducer from "../reducers/albumPageReducer";
import artistPageReducer from "../reducers/artistPageReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  music: musicReducer,
  albumPage: albumPageReducer,
  artistPage: artistPageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
