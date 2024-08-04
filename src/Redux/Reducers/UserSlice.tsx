import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../models/IUser";

interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 23
}

const userSlice: any = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        increment(state) {
            state.count += 1
        },
        userFatching(state) {
            state.isLoading = true
        },
        userFatchingSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = true
            state.error = ''
            state.users = [...state.users, ...action.payload]
        },
        userFatchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export default userSlice.reducer
export const { increment, userFatching, userFatchingSuccess, userFatchingError } = userSlice.actions