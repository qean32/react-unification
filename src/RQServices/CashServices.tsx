import { host } from "../Functions/GiveHost"

const token = localStorage.getItem('token')

export const CASHServices = {
    GETCash() {
        return fetch(`${host}cash/search/cash/`).then(results => results.json())
    },
    GETListCash() {
        return fetch(`${host}cash/search/list_cash/`).then(results => results.json())
    },
    POSTCash(body_: any) {
        return fetch(`${host}cash/reg/cash/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            },
            body: JSON.stringify(body_)
        }).then(results => results.json())
    }
}