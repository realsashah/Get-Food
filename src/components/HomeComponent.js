import React,{Component} from 'react';
import {Media} from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';
import ahsanshah from '../assets/img/ahsanshah.jpg';
import food from '../assets/img/pakistaniFood.jpg';
import pizza from '../assets/img/pizza.jpg';



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
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src={pizza} alt="uthappizza" />
                    <div className="media-body">
                        <h2 className='mt-0'>Extra Large Pizza
                            <span className="badge badge-danger">HOT</span>
                            <span className="badge badge-pill badge-secondary">$9.99</span>
                        </h2>
                        <p className="d-none d-sm-block">A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.</p>

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
                        <p className="d-none d-sm-block">Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>

                    </div>
                    <img className="img-fluid img-thumbnail align-self-center" src={food} alt="Buffet" />
                </div>
            </div>
            </div>


            <div className=" row row-content align-item-center">
            <div className="col-12 col-sm-4 order-sm-last col-md-3">
                <h3>Meet our Culinary Specialists</h3>
            </div>
            <div className="col col-sm order-sm-first col-md">
                <div className="media">
                    <img className="d-flex mr-3 img-thumbnail align-self-center" src={ahsanshah} alt="Ahsan Shah" width={150} height={150} />
                    <div className="media-body">
                        <h2 className='mt-0'>Ahsan Shah</h2>
                        <h4>Executive Chef</h4>
                        <p className="d-none d-sm-block">Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. </p>

                    </div>
                </div>
            </div>
            </div>

        </div>
    </>
    );
}

export default Home;