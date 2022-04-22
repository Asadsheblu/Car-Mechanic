import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [service,setService]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    console.log(service);
    const handelCart=()=>{
        console.log('cart-added')
    }
    return (
        <div className='row container-fluid'>
            <h1 className='text-center text-danger'>Services</h1>
            
            {
                service.map(service=><Service key={service._id} service={service} handelCart={handelCart}></Service>)
            }
        </div>
    );
};

export default Services;