import React,{useContext} from 'react'
import {Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {CartContext} from '../contexts/CartContext';
import {Link} from 'react-router-dom';


function RenderMenuItem({dish}){
    return(
        <Card>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardImgOverlay className="ml-5" >
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>        
        </Card>
    );
}

const Cart = (props) => {
    const {cartItems}=useContext(CartContext);

    
    const data=cartItems.map((dish)=>{
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderMenuItem dish={dish} />       
            </div>
        )
    });

    return ( 
    <div>
    <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                   {data}
                </div>
    </div> 
    );
}
 
export default Cart;