import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '.././../images/logo-black.png'
const Header = () => {
  const [user]=useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
}
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img classNameName='img-fluid' src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" to='/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/order'>Order</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/service'>Service</Link>
        </li>
        
       { user && <>
        <li className="nav-item"> 
        <Link className="nav-link" to="/addservice">AddService </Link>
        </li>
        <li className="nav-item"> 
        <Link className="nav-link" to="/manage">Manageservice </Link>
        </li>
        </>
       
       }
        
       
        <li className="nav-item">  
       { user?

       <Button onClick={handleSignOut}>SignOut</Button>
       :
       <Link className="nav-link" to="/login">Login </Link>
       }
        </li>
        <li className="nav-item">  
        <Link className="nav-link" to="/register">Register</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
            
         
        </div>
    );
};

export default Header;