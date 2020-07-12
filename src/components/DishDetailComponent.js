import React,{useState,useContext} from 'react'
import {Button,Card, CardImg,CardText,CardBody,
    CardTitle,Breadcrumb, BreadcrumbItem,Input} from 'reactstrap';
import {CartContext} from '../contexts/CartContext';
import {Link} from 'react-router-dom';
import {addIntoCart} from '../reducers/ActionTypes'

function RenderDish({dish}){
    let details;
    if(dish!=null){
        details=
        <div>
                <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>

            </Card>
            </div>
            
    }
    else{
        details=    <div></div>
    }
    return details;
}




const DishDetail = (props) => {
    const [quantity,setQuantity]=useState(1);
    const {dispatch}=useContext(CartContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({
            type:addIntoCart,
            dish:{...props.dish,quantity}
        });
        alert('Item Added into Cart');
        setQuantity(1);
    }

    return (  
        <>
        <div className='row'>
           <Breadcrumb>
                <BreadcrumbItem><Link to ='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
                <h3>Menu</h3>
                <hr />
            </div>
        </div>
        <div className='row'>  
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish}/>
            </div>
            
            <div className="col-12 col-md-5 m-1">    
                <form onSubmit={handleSubmit}>
                    <div className='row col-md-5 form-group'>
                    
                        <Button className='fa fa-minus col-3' onClick={()=>{
                            if(quantity!==1)
                                    setQuantity(quantity-1);
                        }}></Button>
                        <Input type='number' className='col-6' value={quantity}/>
                        <Button className='fa fa-plus col-3' onClick={()=>setQuantity(quantity+1)}></Button>
                    </div>
                    <Button outline type='submit' className='fa fa-shopping-cart fa-lg'>Add to Cart</Button>           
                </form>
            </div>
        </div>
    </>

    );
}
 

export default DishDetail;