import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from '../../../../config/firebase';
import { AuthContext } from '../../../../context/AuthContext';



export default function Header() {

  const {dispatch, isAuthenticated}= useContext(AuthContext)


  const handleLogout=()=>{
    signOut(auth).then(() => {
      dispatch({ type: "LOGOUT" });
      console.log("logged out");
      window.location.reload();
      
    });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand " to='/'>Abdi</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to='/dashboard'>Admin Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link  dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/'>Action</Link></li>
            <li><Link className="dropdown-item" to='/'>Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to='/'>Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link  disabled ">Disabled</Link>
        </li>
      </ul>
      <div className="d-flex">
        

        {!isAuthenticated
        ?<Link to='/auth/login' className="btn btn-info ">Login</Link>
        :''
          
        }


        {isAuthenticated
        ?<button className='btn btn-danger' onClick={handleLogout}>Log Out</button>
        :''

        }
      </div>
    </div>
  </div>
</nav>
    
  )
}
