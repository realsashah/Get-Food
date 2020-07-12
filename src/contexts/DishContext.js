import React,{createContext,useState} from 'react'
import dishList from '../shared/dishes'

export const DishContext=createContext();

const DishContextProvider = (props) => {

    
    const [dishes, setDishes]=useState(dishList);
    
    return ( 
        <DishContext.Provider value={{dishes}}>
            {props.children}
        </DishContext.Provider>
     );
}
 
export default DishContextProvider;