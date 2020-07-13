import React,{createContext,useReducer} from 'react'
import {AuthReducer} from '../reducers/AuthReducer';
import accountsData from '../shared/accounts';

export const AuthContext=createContext();

const AuthContextProvider = (props) => {
    const [accounts,dispatch]=useReducer(AuthReducer,accountsData);
    return (
        <AuthContext.Provider value={{accounts,dispatch}}>
            {props.children}
        </AuthContext.Provider>
      );
}
 
export default AuthContextProvider;