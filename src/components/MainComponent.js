import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import About from './Aboutcomponents';
import Menu from './MenuComponent';
import Footer from './Footercomponents';
import DishContextProvider from '../contexts/DishContext';
import {actions } from 'react-redux-form'; 
import {Switch,Route,Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';



class Main extends Component{
    constructor(props){
        super(props);
    }
    
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
            <Menu />
          )
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
                    <DishContextProvider>
                      <Route path='/menu' component={MenuPage} />
                    </DishContextProvider>                    
                </Switch>
            </div>
              <Footer/>  
            </>
        );
    }
}

export default Main;
