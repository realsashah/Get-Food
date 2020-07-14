import {signUp,checkUsername,login} from './ActionTypes';
import uuid from 'uuid/v1'


export const AuthReducer=(state,action)=>{
    switch(action.type){
        case signUp:
            console.log(`State is ${state}`);
            if(state){
                return[state={
                    id:uuid(),
                    name:action.account.name,
                    email:action.account.email,
                    password:action.account.password,
                    username:action.account.username
                }];
            }
            return[...state,{
                id:uuid(),
                name:action.account.name,
                email:action.account.email,
                password:action.account.password,
                username:action.account.username
            }];
        
        case checkUsername:
            console.log(state.some(acc=>acc.username===action.username));
            return(
                !state.some(acc=>acc.username===action.username)
            );

        case login:
            break;

        default:
            return state;
    }
}