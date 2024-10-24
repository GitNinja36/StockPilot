import React from 'react';
import {Link} from "react-router-dom";

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, height}) {
    return ( 
        <div className='container'>
            <div className='d-flex flex-row justify-content-between mb-3 p-5'>
                <div className=' p-3'>
                    <img src={imageUrl} style={{height:`${height}`, width:"auto"}} />
                </div>
                <div className='p-4'></div>
                <div className='p-5'>
                    <h1 className='pb-3 pt-5'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <Link to={tryDemo} className='text-decoration-none'>Try Demo</Link>
                        <Link to={learnMore} className='text-decoration-none' style={{marginLeft:"50px"}}>Learn More</Link>
                    </div>
                    <div className='mt-4'>
                        <Link to={googlePlay}><img src="media/images/appstoreBadge.svg" /></Link>
                        <Link to={appStore} style={{marginLeft:"50px"}}><img src="media/images/googlePlayBadge.svg" /></Link>    
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;