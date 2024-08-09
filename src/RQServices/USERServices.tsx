import { host } from "../Functions/GiveHost"

export const USERServices = {
    GETUsers(page: number) {
        return fetch(`${host}users/search/user/?offset=${page}&limit=4`).then(results => results.json())
    },
    GETUser(id: number) {
        return fetch(`${host}users/search/user/?id=${id}`).then(results => results.json())
    }
}