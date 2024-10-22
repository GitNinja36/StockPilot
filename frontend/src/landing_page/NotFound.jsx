import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5 pt-5 pb-5'>
                <h1 className='text-center text'>404</h1>
                <h3 class="text-center mt-1 fs-2 mb-3">Kiaan couldn’t find that page</h3>
                <p className='text-center small'>We couldn’t find the page you were looking for. Visit <Link to="/">Zerodha’s home page</Link></p>
            </div>
        </div>
     );
}

export default NotFound;