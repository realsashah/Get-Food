import React,{createContext,useReducer} from 'react'
import {CartReducer} from '../reducers/CartReducer';
import CART from '../shared/cart';

export const CartContext=createContext();

const CartContextProvider = (props) => {
    const [cartItems,dispatch]=useReducer(CartReducer,CART);
    return ( 
        <CartContext.Provider value={{cartItems,dispatch}}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;
