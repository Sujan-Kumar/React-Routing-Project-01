import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event)=>{
            setPassword(event.target.value)
    };


    const handleSubmit = (event)=>{
            event.preventDefault();
           if(email === "sujanishurdi@gmail.com" && password ==='423291'){
                navigate("/Profile");
           }else{
            navigate("/");
           }
    };


  return (
    <div className='signin-area'>
        <h2>Sign In Panel </h2>
        <form onSubmit={handleSubmit} className='signin-form'>
            <input type="email"
                id='email'
                name='email'
                placeholder='Email'
                onChange={handleEmailChange}

            />

            <input type="password" 
                id='password' 
                name='password'
                placeholder='Password'
                onChange={handlePasswordChange}
            />
            <button>Sign In</button>
        </form>
    </div>
  )
}

export default SignIn
