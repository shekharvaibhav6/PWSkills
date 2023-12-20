import React, { useState } from 'react';
import {Link} from 'react-router-dom';

    const SignUp = ({ history }) => {
        const handleSignUp = () => {
          history.push('/');
        };
    return(
        <>
        <div className="container">
        <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="#" />
        
        <div className="container1">
            <input className="inp" type="text" placeholder="Mobile Number or Email"/>
            <input className="inp" type="text" placeholder="Full Name"/>
            <input className="inp1" type="text" placeholder="Phone Number or Username"/>
            <input className="inp1" type="password" placeholder="Password"/>
            
        </div>
        <button onClick={handleSignUp} className="bg-blue-800 text-white mt-8 rounded-md w-96 h-9">Sign Up</button>
        <div className="container3">have an account?
        <Link to="/LogIn" className="text-blue-900 pl-2">Login</Link>
        </div>
        </div>
        </>
        
    )
}
export default SignUp;