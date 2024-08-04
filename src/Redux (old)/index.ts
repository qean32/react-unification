import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

const rootreducer = combineReducers({cash: userReducer})

export const store: any = configureStore({reducer: rootreducer})
