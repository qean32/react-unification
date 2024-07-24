const defaultValue: any = {
    cash: 0
}

const addCash = 'ADD_CASH'
const removeCash = 'REMOVE_CASH'

export const reducer = (state: any = defaultValue, action: any): any => {
    switch (action.type) {
        case addCash:
            return { ...state, cash: state.cash + action.payload }
        case removeCash:
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}

export const addCashAction = (payload: any) => { return { type: addCash, payload: payload } }
export const removeCashAction = (payload: any) => { return { type: removeCash, payload: payload } }