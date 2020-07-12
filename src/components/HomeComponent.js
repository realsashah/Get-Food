import React,{Component} from 'react';
import {Media} from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';


const dish=DISHES.filter(d=>d.featured)[0];

const leader=LEADERS.filter(lead=>lead.featured)[0];
const promo=PROMOTIONS.filter(p=>p.featured)[0];

function Home(props){
    return(
    <>
          <div className="container">

            <div className="row row-content align-items-center">
            <div className="col-12 col-sm-4 order-sm-last col-md-3">
                <h3>Our Lipsmacking Culinary Creations</h3>
            </div>
            <div className="col col-sm order-sm-first col-md">
                <div className="media">
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src={dish.image} alt="uthappizza" />
                    <div className="media-body">
                        <h2 className='mt-0'>{dish.name}
                            <span className="badge badge-danger">HOT</span>
                            <span className="badge badge-pill badge-secondary">$9.99</span>
                        </h2>
                        <p className="d-none d-sm-block">{dish.description}</p>

                    </div>
                </div>

            </div>
            </div>

            <div className="row row-content align-items-center">
            <div className="col-12 col-sm-4 order-sm-first col-md-3">
                <h3>This Month's Promotions</h3>
            </div>
            <div className="col col-sm order-sm-last col-md">
                <div className="media">
                    <div className="media-body">
                        <h2 className='mt-0'>Great Food Variety
                            <span className="badge text-white">NEW</span>
                        </h2>
    <p className="d-none d-sm-block">{promo.description}</p>

                    </div>
                    <img className="img-fluid img-thumbnail align-self-center" src={promo.image} alt="Buffet" />
                </div>
            </div>
            </div>


            <div className=" row row-content align-item-center">
            <div className="col-12 col-sm-4 order-sm-last col-md-3">
                <h3>Meet our Culinary Specialists</h3>
            </div>
            <div className="col col-sm order-sm-first col-md">
                <div className="media">
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src={leader.image} alt="Ahsan Shah" width={150} height={150} />
                    <div className="media-body">
                        <h2 className='mt-0'>{leader.name}</h2>
                        <h4>{leader.designation}</h4>
                        <p className="d-none d-sm-block">{leader.description} </p>

                    </div>
                </div>
            </div>
            </div>

        </div>
    </>
    );
}

export default Home;