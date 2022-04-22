import React, { useEffect, useState } from 'react';
import Bike from './Bike';

const Bikes = () => {
    const [bikes,setBikes]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/bike")
        .then(res=>res.json())
        .then(data=>setBikes(data))
    },[])
    
    return (
        <div className='row container-fluid'>
            {
                bikes?.map(bike=><Bike key={bike._id} bike={bike} />)
            }
            
        </div>
    );
};

export default Bikes;