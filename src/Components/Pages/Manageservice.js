import React from 'react';
import useService from '../../hook/useService';

const Manageservice = () => {
    const [service,setService]=useService()
    const deleteHandel=(id)=>{
       const proced=window.confirm("Are You Sure Want To Delete?")
       if(proced){
        const url=`http://localhost:5000/service/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining=service.filter(service=>service._id!==id)
            setService(remaining)
        })
        
       }
    }
    return (
        <div>
            {
                service.map(service=><div className='w-50 mx-auto' key={service._id}>
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
        <button onClick={()=>deleteHandel(service._id)}>Delete</button>
      </div>
    </div>
  </div>
</div>

                </div>)
            }
        </div>
    );
};

export default Manageservice;