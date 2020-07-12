import React from 'react'
import {Card, CardImg,CardText,CardBody,
    CardTitle,Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


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
            </div>
        </div>
    </>

    );
}
 

export default DishDetail;