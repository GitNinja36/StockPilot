import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            <Hero/>
            <Awards/>
            <Pricing/>
            <Stats/>
            <OpenAccount/>
        </>
     );
}

export default HomePage;