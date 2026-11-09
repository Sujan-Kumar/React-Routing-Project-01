import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  const [isSignIn, setisSignIn] = useState(false);

  useEffect(()=>{
    const signInStatus =JSON.parse(localStorage.getItem('isSignIn'));
    setisSignIn(signInStatus);
  },[]);

  const handleSignOut =()=>{
    setisSignIn(false);
    localStorage.setItem("isSignIn", JSON.stringify(true));
  };

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
                      isSignIn &&
                      <>
                        <li>
                          <Link to ="/SignOut" onClick={handleSignOut}>Sign Out</Link>
                        </li>
                      </>
                    }
                    {
                      !isSignIn &&
                      <>
                        <li>
                          <Link to ="/SignIn">Sign In</Link>
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
