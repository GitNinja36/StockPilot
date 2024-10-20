import React from 'react';

function Stats() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-4 mb-5'>
                    <img 
                        src="media/images/education.svg" 
                        style={{ maxWidth: '433px', height: '325px' }} 
                    />
                </div>
                <div className='col-6 mt-4 mb-5'>
                    <h2 className='p-2'>Free and open market education</h2>
                    <div className='p-4'>
                        <div>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        </div>
                        <div className='text-left mb-5'>
                            <a href="" className='text-decoration-none'>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div>
                            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        </div>
                        <div className='text-left mb-5'>
                            <a href="" className='text-decoration-none'>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;