import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='conatiner' style={{  backgroundColor:"rgb(56, 126, 209)", color:"white"}}>
            <div className='row'>
                <div className='row p-5'>
                    <div className='col-1'></div>
                    <h4 className='col-2 fw-medium'>Support Portal</h4>
                    <div className='col-7'></div>
                    <p className='col-2' ><Link to=""  style={{color:"white"}}>Track tickets</Link></p>
                </div>
                <div className='d-flex flex-row p-4 mb-5 mt-3 justify-content-between'>
                    <div className='pl-3' ></div>
                    <div className='d-flex flex-column mb-3'>
                        <h2 className='mb-5'>Search for an answer or browse help topics to create a ticket</h2>
                        <input type="text" className='mb-4 p-2' />
                        <div className='d-flex flex-row mb-3 pl-5'>
                        <p><Link to="" style={{color:"white", marginLeft:"2rem"}}>Track account opening  </Link></p>
                        <p><Link to="" style={{color:"white", marginLeft:"2rem"}}>Track segment activation </Link></p>
                        <p><Link to="" style={{color:"white", marginLeft:"2rem"}}>Intraday margins</Link></p>
                        <p><Link to="" style={{color:"white", marginLeft:"2rem"}}> Kite user manual</Link></p></div>
                    </div>
                    <div className='d-flex flex-column  mb-3'>
                        <h3>Featured</h3>
                        <div className='p-4'>
                            <p>1. <Link to="" style={{color:"white"}}>Rights Entitlements listing in October 2024</Link></p>
                            <p>2. <Link to="" style={{color:"white"}}>Surveillance measure on scrips - October 2024</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;