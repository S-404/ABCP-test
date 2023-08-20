import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi.ts";
import userSlice from "./userSlice.ts";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useSelector } from "react-redux";


const rootReducer = combineReducers({
  user: userSlice,
  [userApi.reducerPath]: userApi.reducer,
});


export function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(
          userApi.middleware,
        ),
  });

  setupListeners(store.dispatch);

  return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof appStore
export type AppDispatch = typeof appStore.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;