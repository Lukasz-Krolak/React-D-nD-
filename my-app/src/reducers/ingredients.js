import { RECEIVE_INGREDIENTS } from '../actions/ingredients'
export const MOVE_INRECIPE = 'MOVE_INRECIPE'

export default function ingredients(state={}, action){
    switch(action.type){
        case RECEIVE_INGREDIENTS:
            return {
                ...state,
                ...action.ingredients,
            }
        case MOVE_INRECIPE:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    inRecipe: 'true'
                }
            }
        default:
            return state
    }
}