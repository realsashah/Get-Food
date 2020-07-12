import React,{useContext} from 'react'
import {Media,Breadcrumb,BreadcrumbItem,Button} from 'reactstrap';
import {CartContext} from '../contexts/CartContext';
import {Link} from 'react-router-dom';
import {removeFromCart} from '../reducers/ActionTypes'




const Cart = (props) => {

    const RenderCartItem=({dish})=>{
        return(
            <Media tag='li'>
                <Media object src={dish.image} alt={dish.name} className="mr-5" heigth={105} width={105}/>
                <Media body>
                <Media heading>
                    {dish.name}
                </Media>
                    {"Qty:"+dish.quantity}
                    <br/><br/>
                </Media>
                <Button className='fa fa-minus' onClickCapture={()=>handleRemove(dish.id)}></Button>
        </Media>
        
        );
    }

    const {cartItems,dispatch}=useContext(CartContext);
    const handleRemove=(dishId)=>{
        dispatch({
            type:removeFromCart,
            id:dishId
        });
        alert('Item Removed');
    }

    
    const data=cartItems.map((dish)=>{
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <RenderCartItem dish={dish} />       
            </div>
        )
    });

    

    return ( 
    <>
    <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Cart</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Cart</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Cart Items</h2>
                    </div>
                    <div className="col-12">
                        <Media list className="mt-5">
                            {data}
                        </Media>
                    </div>

                    <div>
                        <Button outline onClick={()=>{cartItems.map(dish=>handleRemove(dish.id))}}>Check Out</Button>
                    </div>
                </div>
    </> 
    );
}
 
export default Cart;