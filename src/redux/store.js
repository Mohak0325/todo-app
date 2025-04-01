import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import taskReducer from "./slices/taskSlice";
import quoteReducer from "./slices/quoteSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    quote: quoteReducer,
  },
});