import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../../shared/utility';
const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.7,        
    cheese:0.4,
    meat:1.3
}
const initialState={
    ingredients:null,
    purchasable: false,
    error: false,
    totalPrice:4,
    building: false
}
const addIngredient= (state, action) =>{
    const updatedIngredient={[action.ingredientName]:state.ingredients[action.ingredientName]+1}
            const updatedIngredients= updateObject(state.ingredients,updatedIngredient)
            const updatedState={
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
             }
            return updateObject(state, updatedState);
}
const removeIngredient= (state, action) =>{
    const updatedIngredient={[action.ingredientName]:state.ingredients[action.ingredientName]-1}
            const updatedIngredients= updateObject(state.ingredients,updatedIngredient)
            const updatedState={
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
             }
            return updateObject(state, updatedState);
}
const setIngredient= (state, action) =>{
    const updatedSta={
                ingredients:{
                    salad:  action.ingredients.salad,
                    bacon:  action.ingredients.bacon,
                    cheese:  action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false,
                totalPrice:4,
                building: false
            }
            return updateObject(state, updatedSta);
}
const reducer =(state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        case actionTypes.SET_INGREDIENT: return setIngredient(state, action)
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true});
        default:
            return state;
    }

}
export default reducer;