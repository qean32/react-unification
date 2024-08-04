interface state_ {
    users: any[]
}

interface action_ {
    type: string
    payload?: any
}

const defaultValue: state_ = {
    users: []

}

const POST_USER = 'POST_USER'
const REMOVE_USER = 'REMOVE_USER'

export const userReducer = (state: state_ = defaultValue, action: action_): state_ => {
    switch (action.type) {
        case POST_USER:
            return { ...state, users: [...state.users, action.payload] }
        case REMOVE_USER:
            return { ...state, users: [...state.users.filter((el: any) => el.id !== action.payload.id)] }
        default:
            return state
    }
}

export const POST_USER_ACTION = (payload: any) => { return { type: POST_USER, payload: payload } }
export const REMOVE_USER_ACTION = (payload: any) => { return { type: REMOVE_USER, payload: payload } }