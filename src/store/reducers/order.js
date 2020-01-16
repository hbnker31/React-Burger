import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../../shared/utility';

const initialState ={
    orders: [],
    loading: false,
    purchased: false
}
const purchaseBurgerSuccess =(state, action) =>{
    const newOrder= updateObject(action.orderData, {id: action.orderId})
        const updatedState={
            loading: false,
            orders: state.orders.concat(newOrder),
            purchased: true
        }
    return updateObject(state, updatedState)
}
const fetchOrderSuccess=(state, action) =>{
    const updatedFetchState={
        orders: action.orders,
        loading: false
    }
    return updateObject(state, updatedFetchState)
}
const reducer =(state=initialState, action ) =>{
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return updateObject(state, {purchased: false})
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action)
        case actionTypes.PURCHASE_BURGER_FAIL: return updateObject(state, {loading: false})
        case actionTypes.PURCHASE_BURGER_START: return updateObject(state, {loading: true})
        case actionTypes.FETCH_ORDERS_START: return updateObject(state, {laoding: false})
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state,action)
        case actionTypes.FETCH_ORDERS_FAIL: return updateObject(state, {loading: false})
        default: return state
    }
};

export default reducer;
