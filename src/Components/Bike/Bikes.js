import React, { useEffect, useState } from 'react';
import Bike from './Bike';

const Bikes = () => {
    const [bikes,setBikes]=useState([])
    useEffect(()=>{
        fetch('bike.json')
        .then(res=>res.json())
        .then(data=>setBikes(data))
    },[])
    const handelCart=()=>{
        console.log('added bike')
    }
    return (
        <div className='row container-fluid'>
            {
                bikes?.map(bike=><Bike key={bike.id} bike={bike} handelCart={handelCart} />)
            }
            
        </div>
    );
};

export default Bikes;