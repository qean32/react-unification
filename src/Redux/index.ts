import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./Reducers/todosSlice";

const rootReducer = combineReducers({
    todos: todosReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// export const store = configureStore({
//     reducer: {
//       todos: todosReducer,
//     },
//   })

export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
