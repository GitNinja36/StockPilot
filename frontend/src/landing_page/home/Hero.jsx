import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <img src="media/images/homeHero.png" alt="Hero Images" className='mb-5' />
                <h1 className='text-center mt-5'>Invest in everything</h1>
                <p className='text-center mt-1'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mt-4' style={{ width:"25%", margin:"0 auto" }} >Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;