import React from 'react';
import {Link} from "react-router-dom";

function RightSection({imageUrl, productName, productDescription, learnMore, height}) {
    return ( 
        <div className='container'>
            <div className='d-flex flex-row justify-content-between align-items-center mb-3 p-5'>
                <div className='mb-5 p-5'>
                    <h1 className='pb-3 pt-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <Link to={learnMore} className='text-decoration-none'>{learnMore}</Link>
                </div>
                <div className='p-4'></div>
                <div className='p-2'>
                    <img src={imageUrl} style={{height:`${height}`, width:"auto"}} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;