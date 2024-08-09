import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Reducers/UserSlice";
import { CashServicesRTK } from "./Services/CashServicesRTK";

export const rootReducer = combineReducers({
    users: usersReducer,
    [CashServicesRTK.reducerPath]: CashServicesRTK.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaulMiddelware: any) => getDefaulMiddelware().concat(CashServicesRTK.middleware)
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
