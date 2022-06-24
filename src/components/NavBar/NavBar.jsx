import React from 'react'
import './styles.scss'

import { Link } from 'react-router-dom';
// import negro from '../images/aquiles.jpg'; 

const NavBar = () => {

  return (
    <>
      <div className='nav-bar'>
        <section class="top-nav">
          <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' 
            for="menu-toggle">
              <div class='menu-button'>
              </div>
            </label>

        <ul class="menu">
          <li >
            <Link 
              to="/">
                Home
              </Link> 
          </li>
          <li>
              <Link 
              to="/select">
                List
            </Link> 
          </li>
          <li>  
              <Link 
              to="/breeds">
                Gallery
              </Link>
          </li>      
        </ul>
      </section>

      </div>

      {/* <div >
          <img className="image-ppal" src={negro} alt="Negro" />
      </div> */}
    </>
  )
}

export default NavBar; 