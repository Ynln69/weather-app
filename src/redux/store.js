import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./weatherSlice";

const { weatherReducer } = reducer;

const persistConfig = {
  key: "weather",
  version: 1,
  storage,
  whitelist: ["scaleType", "language"],
};

const persistedReducer = persistReducer(persistConfig, weatherReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

const data = {
  store,
  persistor,
};
export default data;
