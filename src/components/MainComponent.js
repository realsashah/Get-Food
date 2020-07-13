import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import About from './Aboutcomponents';
import Menu from './MenuComponent';
import Cart from './CartComponent';
import Footer from './Footercomponents';
import SignUp from './SignUpComponent';
import AuthContextProvider from '../contexts/AuthContext'
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
            <Menu />
            </DishContextProvider>
          )
        }

        const DishWithId=({match})=>{
          return (
            <CartContextProvider>
              <DishDetail dish={dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} />
            </CartContextProvider>
        );
        }

        const CartPage=()=>{
          return(
            <CartContextProvider>
              <Cart />
            </CartContextProvider>
          );
        }

        const SignUpPage=()=>{
          return(
            <AuthContextProvider>
             <SignUp />
            </AuthContextProvider>
          )
        }
        return(
            <>
              <Header />
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
                    <Route path='/signup' component={SignUpPage} />
                </Switch>
            </div>
              <Footer/>  
            </>
        );
    }
}

export default Main;
