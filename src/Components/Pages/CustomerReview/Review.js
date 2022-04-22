import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings/build/star-ratings';

const Review = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    const navigate=useNavigate()
    const handelALlReview=()=>{
        const path='/review'
        navigate(path)
    }
    return (
        <div >
            <div className='row container-fluid p-5'>

           
            {
                reviews?.slice(0,3).map(review=><div key={review._id} className="col-md-4 h-25 shadow text-center">
                    
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
             <button onClick={handelALlReview} className="btn btn-warning w-25 mx-auto">
                 See All Review
             
             </button>
        </div>
    );
};

export default Review;