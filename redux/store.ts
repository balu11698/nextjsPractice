import { configureStore } from "@reduxjs/toolkit";
import employeeDataSlice from "./slice/employee";

const reducer = {
  employee: employeeDataSlice,
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  //   devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
