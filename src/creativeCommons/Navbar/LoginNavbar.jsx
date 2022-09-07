import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png';
import './Navbar.css'

export default function LoginNavbar() {
  return (
    <div className="navbar-cont" id="lg-nav">
      <div className="container-medium">
        <div className="navbar log-nav">
          <div className="navbar-logo">
            <Link to="/">
              <img width="300px" src={Logo} id="nav-logo" />
            </Link>
          </div>
          <div className="navbar-menu">
            
          </div>
        </div>
      </div>
    </div>
  )
}
