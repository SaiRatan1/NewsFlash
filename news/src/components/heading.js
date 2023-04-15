import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
const Heading = () => {
    
    let news;

    return (
        <>
            <div className='textcontainer'>
                <p className='p1'>News You Can Trust, </p>
                <p className='p12'>Delivered Instantly :)</p>
                <div className="category">
                <Link to="#daily" className="c1 daily" smooth>DAILY NEWS</Link>
                <Link to="#finance" className="c1 finance" smooth>FINANCE</Link>
                <Link to="#sports" className="c1 sports" smooth>SPORTS</Link>
                <Link to="#weather" className="c1 weather" smooth>WEATHER</Link>
                <Link to="#entertainment" className="c1 entertainment" smooth>ENTERTAINMENT</Link>
                </div>
            </div>


        </>
    )
}

export default Heading
