import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import About from './Aboutcomponents';
import Menu from './MenuComponent';
import Cart from './CartComponent';
import Footer from './Footercomponents';
import DishContextProvider from '../contexts/DishContext';
import CartContextProvider from '../contexts/CartContext';
import {Switch,Route,Redirect } from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import dishes from '../shared/dishes';


class Main extends Component{
    // constructor(props){
    //     super(props);
    // }
    
    render(){
      
        const HomePage=()=>{
            return(
              <Home />
            );
          };
        
        const AboutPage=()=>{
          return(
            <About />
          );
        };

        const MenuPage=()=>{
          return(
            <DishContextProvider>
              <CartContextProvider>
            <Menu />
            </CartContextProvider>
            </DishContextProvider>
          )
        }

        const DishWithId=({match})=>{
          return (
            <DishDetail dish={dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} />
        );
        }

        const CartPage=()=>{
          return(
            <CartContextProvider>
              <Cart />
            </CartContextProvider>
          );
        }
          
        return(
            <>
              <Header/>
              <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/about' component={AboutPage} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route path='/menu' component={MenuPage} />
                    <Route path='/cart' component={CartPage} />
                </Switch>
            </div>
              <Footer/>  
            </>
        );
    }
}

export default Main;
