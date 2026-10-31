import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div>
        <header className='navbar'>
                <div className='navbar_brand'>
                    <Link to="/"><span style= {{color:'yellow'}}>C</span>osmetic Ga<span style={{color:"yellowgreen"}} >llery</span></Link>
                </div>
                <nav className='navbar_links'>
                  <ul>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to ="/SignIn">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Products">Products</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
        </header>
        <Outlet/>
    </div>
    </>
    
  )
}
export default Header
