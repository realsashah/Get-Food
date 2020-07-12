import React,{Component} from 'react';
import { Navbar,NavbarBrand,NavItem,NavbarToggler,Collapse,Nav,Jumbotron,Button}from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };

        this.toggleNav=this.toggleNav.bind(this);

    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
                <Navbar dark expand='md'>
                <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-auto' href='/'>
                            Get Food
                        </NavbarBrand>  
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to="/home" styles={{margin:'1px'}}><span className='fa fa-home fa-lg' styles={{margin:'1px'}}></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/about" styles={{margin:'1px'}}><span className='fa fa-info fa-lg' styles={{margin:'1px'}}></span>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/menu" styles={{margin:'1px'}}><span className='fa fa-list fa-lg' styles={{margin:'1px'}}></span>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/cart" styles={{margin:'1px'}}><span className='fa fa-shopping-cart fa-lg' styles={{margin:'1px'}}></span>Cart</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                                 
                                    <Link to='/cart' className='nav-link'><span className="fa fa-shopping-cart fa-lg"></span>Cart</Link>

                            </NavItem> */}
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span>
                                    Login
                                </Button>
                            </NavItem>

                        </Nav>
                        </Collapse>
                </Navbar>

                <Jumbotron>
                     <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Get Food</h1>
                                <h3>We are here for you.</h3>
                            </div>

                        </div>


                     </div>
                </Jumbotron>

            </>
        );
    }
}


export default Header;