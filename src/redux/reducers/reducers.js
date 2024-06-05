import { createStore } from 'redux'
import * as actions from '../actions/actions'


export const initialState = {
    products: [],
    isManager: false,
    donations: [],
    currentUser: {}
}

export function appReducer(state, action) {
    switch (action.type) {
        case actions.SET_PRODUCTS: {
            const newState = { ...state }
            newState.products = action.payload.products
            return newState
        }

        case actions.SET_IS_MANAGER: {
            const newState = { ...state }
            newState.isManager = action.payload.isManager
            return newState
        }

        case actions.SET_NEW_PRODUCT: {
            const newState = { ...state }
            newState.products = [...state.products, { ...action.payload.product}]
            return newState
        } 

        case actions.SET_UPDATE_PRODUCT: {
            const newState = { ...state }
            newState.products = state.products.filter(item => item.key !== action.payload.product.key)
            newState.products = [...newState.products, { ...action.payload.product}]
            return newState
        }

        case actions.SET_DONATIONS: {
            const newState = { ...state }
            newState.donations = action.payload.donations
            return newState
        }

        case actions.SET_NEW_DONATIONS: {
            const newState = { ...state }
            newState.donations = [...state.donations,{...action.payload.donation}]
            return newState
        }

        case actions.SET_CURRENT_USER: {
            const newState = {...state}
            newState.currentUser = action.payload.user
            return newState
        }
        default:
            return state
    }
}
export const store = createStore(appReducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
