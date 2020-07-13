import {signUp,checkUsername,login} from './ActionTypes';
import uuid from 'uuid/v1'


export const AuthReducer=(state,action)=>{
    switch(action.type){
        case signUp:
            action.account.id=uuid();
            
            return [...state,action.account];
        
        case checkUsername:
            return(
                !state.some(acc=>acc.username===action.username)
            );

        case login:
            break;

        default:
            return state;
    }
}