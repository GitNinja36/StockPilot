import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-lg-5 col-md-6 col-sm-12 mt-2'>
                    <h1>Unbeatable pricing</h1>
                    <p className='p-2'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col-lg-7 col-md-6 col-sm-12 d-flex justify-content-around flex-wrap mb-3 mt-4'>
                    <div className='pricing-box d-flex flex-column align-items-center text-center p-3'>
                        <img 
                            src="media/images/pricing0.svg" 
                            alt="0-image" 
                            className='img-fluid mb-2' 
                            style={{ maxWidth: '120px', height: '89px' }}
                        />
                        <p className='mb-0' style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>Free account <br /> opening</p>
                    </div>
                    <div className='pricing-box d-flex flex-column align-items-center text-center p-3'>
                        <img 
                            src="media/images/pricing0.svg" 
                            alt="0-image" 
                            className='img-fluid mb-2' 
                            style={{ maxWidth: '120px', height: '89px' }}
                        />
                        <p className='mb-0' style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>Free equity delivery <br /> and direct mutual funds</p>
                    </div>
                    <div className='pricing-box d-flex flex-column align-items-center text-center p-3'>
                        <img 
                            src="media/images/intradayTrades.svg" 
                            alt="20-image" 
                            className='img-fluid mb-2' 
                            style={{ maxWidth: '120px', height: '89px' }}
                        />
                        <p className='mb-0' style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>Intraday and <br /> F&O</p>
                    </div>
                </div>
            </div>
            <div className='text-left mb-5'>
                <a href="#" className='pricing-link text-decoration-none'>See Pricing <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    );
}

export default Pricing;