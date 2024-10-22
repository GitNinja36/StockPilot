import React from 'react';
import OpenAccount from '../OpenAccount';
import Hero from '../pricing/Hero';
import Brokerage from '../pricing/Brokerage'

function PricingPage() {
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </>
    );
}

export default PricingPage;