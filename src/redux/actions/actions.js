export const SET_PRODUCTS = '@products/SET_PRODUCTS'
export const SET_IS_MANAGER = '@products/SET_IS_MANAGER'
export const SET_NEW_PRODUCT = '@products/SET_NEW_PRODUCT'
export const SET_UPDATE_PRODUCT = '@products/SET_UPDATE_PRODUCT'
export const SET_DONATIONS = '@products/SET_DONATIONS'
export const SET_NEW_DONATIONS = '@products/SET_NEW_DONATIONS'
export const SET_CURRENT_USER = '@products/SET_CURRENT_USER'

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: { products }
})
export const setIsManagar = (isManager) => ({
    type: SET_IS_MANAGER,
    payload: { isManager }
})
export const setNewProduct = (product) => ({
    type: SET_NEW_PRODUCT,
    payload: { product }
})
export const setUpdateProduct = (product) => ({
    type: SET_UPDATE_PRODUCT,
    payload: { product }
})
export const setDonations = (donations) => ({
    type: SET_DONATIONS,
    payload: { donations }
})
export const setNewDonations = (donation) => ({
    type: SET_NEW_DONATIONS,
    payload: { donation }
})
export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: {user}
})
