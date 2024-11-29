import React from 'react'
import './navbar.module.css'

const Navbar = () => {
  return (
    <nav className='navContainer'>

      <div className="hamburger">
        <span id='line1'></span>
        <span id='line2'></span>
        <span id='line3'></span>
      </div>

      <div>
        Logo
      </div>

      <div className='navLinksContainer'>
        <div>
          Logo
        </div>
        <ul>
          <li>Home</li>
          <li>Upcoming Olympiads</li>
          <li>Prizes & Benefits</li>

          <div>More</div>   {/*   Only in pc */}
          
          {/* Mobile view show Normal */}
          {/* pc view show onclick of More  */}
          <li>Fee Details</li>
          <li>Results</li>
          <li>Guidelines</li>
          <div>
            <h2>Dark Mode</h2>
            <button></button>
          </div>

    
        </ul>
      </div>

      <button>
        Login
      </button>
    </nav>
  )
}

export default Navbar