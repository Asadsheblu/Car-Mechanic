import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Bike = ({bike}) => {
    const {name,price,picture,_id}=bike
    const navigate=useNavigate()
    const handelCart=(_id)=>{
        navigate(`/bike/${_id}`)
    }
    return (
        <div className="col-md-4">
            <img className='img-fluid' src={picture} alt="" />
            <h6>Price:{price}$</h6>
            <h6>Name:{name}</h6>
            <button onClick={()=>handelCart(_id)} className='btn btn-outline-info'><Link className='text-decoration-none text-black' to="/order">Order Now</Link></button>
        </div>
    );
};

export default Bike;