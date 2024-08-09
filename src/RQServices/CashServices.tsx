import { host } from "../Functions/GiveHost"

export const CashServices = {
    GETCash() {
        return fetch(`${host}cash/search/cash/`).then(results => results.json())
    },
    GETListCash() {
        return fetch(`${host}cash/search/list_cash/`).then(results => results.json())
    },
}