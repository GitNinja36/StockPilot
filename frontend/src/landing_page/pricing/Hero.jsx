import React from 'react';

function Hero() {
    return ( 
        <div className='container pt-5 mt-2 pb-5'>
            <div className='row text-center p-3 mt-5'>
                <h1 className='fs-1'>Charges</h1>
                <p className='small text-muted fs-4 pt-1 pb-5'>List of all charges and taxes</p>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col-4 p-5'>
                    <img src="media/images/pricing0.svg"/>
                    <h1 className='text-center fs-3'>Free equity delivery</h1>
                    <p className='text-center small text-muted pt-2'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                        <img src="media/images/intradayTrades.svg"/>
                        <h1 className='text-center fs-3'>Intraday and F&O trades</h1>
                        <p className='text-center small text-muted pt-2'>
                            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                </div>
                <div className='col-4 p-5'>
                        <img src="media/images/pricing0.svg"/>
                        <h1 className='text-center fs-3'>Free direct MF</h1>
                        <p className='text-center small text-muted pt-2'>
                            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;