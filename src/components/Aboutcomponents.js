import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media,Fade} from 'reactstrap';
import {LEADERS} from '../shared/leaders';


function RenderLeader({leader}){
    if(leader!=null){
         return(

          <div key={leader.id} className="col-12 mt-5">
           <Fade in>
             <Media tag='li'>
                 <Media object src={leader.image} alt={leader.name} className="mr-5" heigth={105} width={105}/>
                 <Media body>
                 <Media heading>
                     {leader.name}
                 </Media>
                     {leader.designation}
                     <br/><br/>
                     {leader.description}
                 </Media>
             </Media>
             </Fade>
         </div> 
    );
    }
    else
    {
        return null;
    }
}

function About(props)
{
    const lead = LEADERS.map((leader) => {
        console.log('leaders');
        return (
            // <Stagger in>
                <RenderLeader key={leader.id} leader={leader} />
            // </Stagger>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem >Home</BreadcrumbItem>
                <BreadcrumbItem active>About us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h4>About Us</h4>
                    <hr/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Get Food quickly established itself as a culinary icon par excellence in Islamabad. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Islamabad.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr Ahsan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Fact At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                            <dt className="col-6">Started</dt>
                            <dd className="col-6">5 May 2010</dd>
                            <dt className="col-6">Last Year's Turnover</dt>
                            <dd className="col-6">$1,245</dd>
                            <dt className="col-6">Employess</dt>
                            <dd className="col-6">50</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list className="mt-5">
                        {lead}
                    </Media>
                </div>
            </div>
        </div>

        
    );
}
export default About;