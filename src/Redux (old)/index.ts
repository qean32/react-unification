import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootreducer = combineReducers({cash: userReducer})

export const store: any = configureStore({reducer: rootreducer})
