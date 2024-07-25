import { createSlice } from "@reduxjs/toolkit";

interface todoState_ {
    todo: todo_[]
    isLoading: boolean
    error: string
}

interface todo_ {
    id: number,
    text: string,
    completed: boolean
}

const initialState: todoState_ = {
    todo: [{
        id: 1, text: 'zxc', completed: false
    }],
    isLoading: false,
    error: ''
}

const todosSlice: any = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        
    },
})

export default todosSlice.reducer