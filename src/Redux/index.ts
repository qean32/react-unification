import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./ReduxStore";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootreducer = combineReducers({reducer})

export const store: any = configureStore({reducer: rootreducer}, composeWithDevTools)
