import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';

const AllCustomerReview = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <div className='row container-fluid p-5'>
            {
                reviews?.map(review=><div key={review._id}  className="col-md-4 h-25 shadow text-center">
                    
                    <img className="img-fluid w-25" src={review.picture} alt="" />
                    <h5>Name:{review.name}</h5>
                    <StarRatings
        rating={4.8}
        starDimension="20px"
        starRatedColor="yellow"
      />
            <blockquote>{review.review}</blockquote>
                </div>)
               
            }
        </div>
        </div>
    );
};

export default AllCustomerReview;