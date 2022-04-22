import React from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from '../Public/Slider/Slider';
import mechanic from '../../images/icon/mechanic.png'
import service from '../../images/icon/repair-service.png'
import bike from '../../images/icon/icons8-bike-64.png'
import Review from './CustomerReview/Review';

const Home = () => {
    const navigate=useNavigate()
    const servicehandel=()=>{
            navigate('/service')
    }
    const bikehandel=()=>{
            navigate('/bike')
    }
    const experthandel=()=>{
            navigate('/expert')
    }
    return (
        <div>
            
            <Slider></Slider>
            
            <h1 className='text-center display-5'>Category</h1>
            <div className="row container p-5">
                <div className="col-md-4 p-5">
                    <button className='btn btn-outline-info p-4' onClick={servicehandel}><img className='img-fluid' src={service} alt="" />  Service</button>
                </div>
                <div className="col-md-4 p-5">
                <button className='btn btn-outline-danger p-4'  onClick={bikehandel}><img className="img-fluid" src={bike} alt="" /> Bike</button>
                </div>
                <div className="col-md-4 p-5">
                <button  className='btn btn-outline-warning p-4' onClick={experthandel}><img className='img-fluid' src={mechanic} alt="" />Expert Mechanic</button>
                </div>

            </div>
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
            <Review></Review>
         
        </div>
    );
};

export default Home;