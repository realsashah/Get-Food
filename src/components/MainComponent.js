import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import About from './Aboutcomponents';
import Footer from './Footercomponents';
import { actions } from 'react-redux-form'; 
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

          
        return(
            <>
              <Header/>
              <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/about" />
                    </Route>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/about' component={AboutPage} />
                </Switch>
            </div>
              <Footer/>  
            </>
        );
    }
}

export default Main;
