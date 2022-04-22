import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Bikedetails = () => {
    const {bikeId}=useParams()
    const [bike,setBike]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/bike/${bikeId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBike(data))
    },[])
    return (
        <div>
            <div className="card mb-3 cards">
  <div className="row g-0">
    <div className="col-md-4">
      <img  src={bike?.picture} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{bike?.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bikedetails;