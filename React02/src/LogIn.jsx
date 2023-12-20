import React from 'react';
import {Link} from 'react-router-dom';

    const LogIn = ({ history }) => {
        const handleLogIn = () => {
          
          history.push('/');
        };
    return(
        <>
        <div className="container">
        <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="#" />
        <div className="container1">
            <input className="inp1" type="text" placeholder="Phone Number or Username"/>
            <input className="inp1" type="password" placeholder="Password"/>
        </div>
        <button  onClick={handleLogIn} className="bg-blue-800 text-white mt-8 rounded-md w-96 h-9">LogIn</button>
        <div className="container3">Don't have account?
        <Link to="/SignUp" className="text-blue-900 pl-2">Sign Up</Link>
        </div>
        </div>
        </>
        
    )
}
export default LogIn;