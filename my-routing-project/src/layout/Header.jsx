import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  const [signIn, setSignIn] = useState(false);

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
                    {
                      signIn &&
                      <>
                        <li>
                          <Link to ="/SignOut" onClick={()=>{setSignIn(false)}}>Sign Out</Link>
                        </li>
                      </>
                    }
                    {
                      !signIn &&
                      <>
                        <li>
                          <Link to ="/SignIn" onClick={()=>{setSignIn(true)}} >Sign In</Link>
                        </li>
                      </>
                    }
                    <li>
                        <Link to="/About">About</Link>
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
