import React from 'react';

const Bike = ({bike,handelCart}) => {
    const {name,price,picture}=bike
    return (
        <div className="col-md-4">
            <img className='img-fluid' src={picture} alt="" />
            <h6>Price:{price}$</h6>
            <h6>Name:{name}</h6>
            <button className='btn btn-info' onClick={()=>handelCart()}>Add to Cart</button>
        </div>
    );
};

export default Bike;