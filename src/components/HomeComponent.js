import React,{Component} from 'react';
import {Media,Card,CardImg,CardTitle,CardText,CardBody,CardSubtitle} from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';


function RenderCard({item}){
    
    return(
    
            <Card>
                <CardImg src={baseUrl+item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}    </CardTitle>
                    {item.designation? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
    );
};

function Home(props){
    return(
    <>
            <div className='container'>
            <div className='row align-items-start'>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}  
                        errMess={props.dishesErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} 
                        isLoading={props.promosLoading}  
                        errMess={props.promosErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}
                        isLoading={props.leadersLoading}     
                        errMess={props.leadersErrMess} />
                </div>
            </div>
        </div>
    </>
    );
}

export default Home;