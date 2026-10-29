import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='navbar'>
                <div className='navbar_brand'>
                    <Link to="/">My React App</Link>
                </div>

                <nav className='navbar_links'>
                  <ul>
                    <li>
                       <Link to="/">Home</Link>
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

                  <Outlet/>
                </nav>
        </header>
    </div>
  )
}
export default Header
