import React,{Component} from 'react';
import {Navbar,NavbarBrand,NavItem,NavbarToggler,Collapse,Nav,Jumbotron,Button,Modal,ModalHeader,ModalBody,Form,Label,FormGroup,Input}from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false,
            username:'',
            password:''
        };

        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this); 
    }

    toggleNav=()=>{
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }

    toggleModal=()=>{
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: "+this.username.value+"\nPassword: "+this.password.value 
                +"\nRemember: "+this.remember.checked);
        event.preventDefault();
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
                                <NavLink className='nav-link' to="/home" style={{margin:'1px'}}><span className='fa fa-home fa-lg' style={{margin:'1px'}}></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/about" style={{margin:'1px'}}><span className='fa fa-info fa-lg' style={{margin:'1px'}}></span>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/menu" style={{margin:'1px'}}><span className='fa fa-list fa-lg' style={{margin:'1px'}}></span>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/cart" style={{margin:'1px'}}><span className='fa fa-shopping-cart fa-lg' style={{margin:'1px'}}></span>Cart</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg"></span>
                                    Login
                                </Button>
                                    <Link to='/signup' style={{textDecoration:'none'}} className='btn btn-outline-secondary'>
                                        <span className="fa fa-sign-up fa-lg"></span>
                                        Sign Up
                                    </Link>
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

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type='text' id='username' name='username' innerRef={(input)=>this.username=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type='password' id='password' name='password' innerRef={(input)=>this.password=input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>    
                    </ModalBody>         
                </Modal>

            </>
        );
    }
}


export default Header;