import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Reducers/todosSlice";

export const rootReducer = combineReducers({
    todos: usersReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// export const store = configureStore({
//     reducer: {
//       todos: usersReducer,
//     },
//   })

export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
