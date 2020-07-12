import {addIntoCart,removeFromCart} from './ActionTypes'


export const CartReducer=(state,action)=>{
    switch(action.type){
        case addIntoCart:
            if(!state.some(dish=>dish.id===action.dish.id)){
                
              return [state.push({
                id: action.dish.id,
                quantity:action.dish.quantity,
                name: action.dish.name,
                image: action.dish.image,
                category: action.dish.category,
                label: action.dish.label,
                price: action.dish.price,
                featured:action.dish.featured,
                description: action.dish.description
            })]
        }
            break;

        case removeFromCart:
            return state.filter(dish=>dish.id!==action.id)

        default:
            return state;
    }
}