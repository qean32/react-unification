import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Reducers/UserSlice";
import { cashServices } from "./Services/cashServices";

export const rootReducer = combineReducers({
    users: usersReducer,
    [cashServices.reducerPath]: cashServices.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaulMiddelware: any) => getDefaulMiddelware().concat(cashServices.middleware)
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
