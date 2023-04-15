import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  return (
    <>
        <div className='navbar'>
            <div className='news'>NEWS</div>
            <div className="rightnavbar">
                <input type="text" className='searchbox' placeholder='Search for the latest news'/>
                <span className='icon'><ion-icon name="search-outline"></ion-icon></span>
                <ul>
                    <li><Link to="Login">SUBSCRIBE</Link></li>
                    {/* <li><Link to="Signup">Sign Up</Link></li> */}
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
