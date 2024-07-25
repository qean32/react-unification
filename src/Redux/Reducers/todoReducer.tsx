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

const defaultValue: todoState_ = {
    todo: [],
    isLoading: false,
    error: ''
}

const todosSlice: any = createSlice({
    name: 'todo',
    initialState: defaultValue,
    reducers: {
        
    },
})

export default todosSlice.reducers