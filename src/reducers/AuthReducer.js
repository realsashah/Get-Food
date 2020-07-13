import {signUp,checkUsername,login} from './ActionTypes';
import {uuid} from 'uuid/v1'


export const AuthReducer=(state,action)=>{
    switch(action.type){
        case signUp:
            return [state.push({
                id:uuid(),
                name:action.account.name,
                email:action.account.email,
                password:action.account.password,
                username:action.account.username
            })]
        
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