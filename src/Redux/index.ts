import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/todoReducer";

const rootReducer = combineReducers({
    todoReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
