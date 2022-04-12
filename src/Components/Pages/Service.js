import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service,handelCart}) => {
    const {name,price,img,description,id}=service
    const navigate=useNavigate()
    const handelProduct=(id)=>{
            navigate(`/service/${id}`)
    }
    return (
        <div className='col-md-4 p-3 shadow-lg'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <h5>{price}$</h5>
            <button onClick={()=>handelProduct(id)} className='btn btn-outline-info'><Link className='text-decoration-none text-black' to="/order">Order Now</Link></button>
        </div>
    );
};

export default Service;