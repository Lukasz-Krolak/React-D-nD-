  export const RECEIVE_INGREDIENTS = 'RECEIVE_INGREDIENTS'
export const MOVE_INRECIPE = 'MOVE_INRECIPE'

export function receiveIngredients(ingredients){
    return{
        type: RECEIVE_INGREDIENTS,
        ingredients
    }
}

export function moveInRecipe(ingredients_id){
    return{
        type: MOVE_INRECIPE,
        id: ingredients_id
    }
}