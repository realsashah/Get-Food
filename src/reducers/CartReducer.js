import {addIntoCart,removeFromCart} from './ActionTypes'


export const CartReducer=(state,action)=>{
    switch(action.type){
        case addIntoCart:
            return [...state,{
                id:action.id
            }]

        case removeFromCart:
            return state.filter(dish=>dish.id!==action.id)

        default:
            return state;
    }
}