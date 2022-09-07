import React from 'react';
import Logo from "../../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function NavbarSmall() {
    
    function expand(){
        const a=document.getElementById("bn");
        const nav=document.getElementById("sm-nav");
        if (a.style.maxHeight){
            a.style.maxHeight = null;
            if(!window.scrollY>0){
            }
          } else {
            a.style.maxHeight = a.scrollHeight + "px";
          } 
    }
    
    return (
        <div className="navbar-cont" id="sm-nav">
            <div className="container-medium new-sm-medium">
                <div className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={Logo} id="nav-logo"/>
                        </Link>
                    </div>
                    <MenuIcon style={{color:'#E8D98B'}} onClick={expand}/>
                </div>
                <div className="sm-navbar-menu" id="bn">
                        <div className="sm-nav-item"><a href='/categories'>Categories</a></div>
                      
                </div>
            </div>
        </div>    
    )
}