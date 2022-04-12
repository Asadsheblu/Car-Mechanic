import React from 'react';


const Expert = ({expert}) => {
    const {name,img}=expert

    return (
        <div className="col-md-4 g-3 p-3">
          
                <img src={img} alt="" />
                <h6>Name:{name}</h6>
                
        </div>
    );
};

export default Expert;