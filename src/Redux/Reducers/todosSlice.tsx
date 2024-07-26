import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
    users: IUser[]
    isLoading: boolean
    error: string
    count: number
}

interface IUser {
    id: number,
    text: string,
    completed: boolean
}

const initialState: UsersState = {
    users: [{
        id: 1, text: 'zxc', completed: false
    }],
    isLoading: false,
    error: '',
    count: 23
}

const usersSlice: any = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        increment(state, action) {
            state.count += 1
        },
        userFatching(state, action) {
            state.isLoading = true
        },
        userFatchingSuccess(state, action) {
            state.isLoading = true
            state.error = ''
            state.users = action.payload
        },
        userFatchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export default usersSlice.reducer
export const { increment, userFatching, userFatchingSuccess, userFatchingError } = usersSlice.actions