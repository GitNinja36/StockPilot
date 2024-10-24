import React from 'react';
import {Link} from "react-router-dom";

function Hero() {
    return ( 
        <div className='container pt-5 pb-5'>
            <div className='col p-3 pt-5 text-center'>
                <h1 className=' '>Zerodha Products</h1>
                <h4 className=' text-muted mt-2 pb-1'>Sleek, modern, and intuitive trading platforms</h4>
                <p className=''>Check out our investment <Link className='text-decoration-none' to="/">offerings →</Link></p>
            </div>
            <div className='border-bottom pt-4 m-5 small'></div>
        </div>
    );
}

export default Hero;