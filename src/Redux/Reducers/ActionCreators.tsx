import { AppDispatch } from ".."
import { userFatching, userFatchingError, userFatchingSuccess } from "./todosSlice"

export const fetchUsers = async (dispatch: AppDispatch) => {
    dispatch(userFatching())
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => { dispatch(userFatchingSuccess(data)) })
            .catch(() => {
                dispatch(userFatchingError())
            })
    }, 1000)
}
