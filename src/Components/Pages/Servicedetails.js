import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './servicedetails.css'
const Servicedetails = () => {
    const {serviceId}=useParams()
    const [service,setService]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
   
   console.log(service);
    return (
        <div>
           <div className="card mb-3 cards">
  <div className="row g-0">
    <div className="col-md-4">
      <img  src={service?.img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{service?.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
          
          
        </div>
    );
};

export default Servicedetails;