import React from 'react';
import { useNavigate } from 'react-router-dom';
import expert1 from "../../../images/experts/expert-1.jpg"
import expert2 from "../../../images/experts/expert-2.jpg"
import expert3 from "../../../images/experts/expert-3.jpg"
import expert4 from "../../../images/experts/expert-4.jpg"
import expert5 from "../../../images/experts/expert-5.jpg"
import expert6 from "../../../images/experts/expert-6.png"
import Expert from './Expert';
const Experts = () => {
    const experts=[
        {name:"Mc.Donald",img:expert1},
        {name:"Mc.Row",img:expert2},
        {name:"Mc.Huda",img:expert3},
        {name:"Mc.Rawon",img:expert4},
        {name:"Mc.Koba",img:expert5},
        {name:"Mc.Samsu",img:expert6},
    ]
    
    
    return (
        <div className='row container-fluid'>
            <h1 className='text-center text-primary'>Our Expert</h1>
            {
                experts.map(expert=><Expert expert={expert} ></Expert>)
            }
        </div>
    );
};

export default Experts;