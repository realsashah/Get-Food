import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import About from './Aboutcomponents';
import Footer from './Footercomponents';
import dishes from '../assets/json files/dishes';
import leaders from '../assets/json files/leaders';
import promos from '../assets/json files/promotions';
import {Switch,Route,Redirect, withRouter } from 'react-router-dom';


class Main extends Component{
    constructor(props){
        super(props);
    }

   
    
    render(){
      
        const HomePage=()=>{
            return(
              <Home dish={dishes.filter(dish=>dish.featured)[0]} 
                leader={leaders.filter(leader=>leader.featured)[0]}
                promotion={promos.filter(promo=>promo.featured)[0]}
                />
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
                    <Route path='/about' component={<About/>} />
                </Switch>
            </div>
              <Footer/>  
            </>
        );
    }
}

export default Main;