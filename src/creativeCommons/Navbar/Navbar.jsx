import React from "react";
import Logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: "rgba(0, 0, 0, 0.75)",
    letterSpacing:'1px',
    lineHeight:'1.5',
    boxShadow: theme.shadows[5],
    fontSize: 14,
    fontWeight:'light',
    padding:'0rem'
  },
}));


export default function Navbar() {
 
  const navigate = useHistory()
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <div className="navbar-cont" id="lg-nav">
      <div className="container-medium">
        <div className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img src={Logo} id="nav-logo" />
            </Link>
          </div>
          <div className="navbar-menu">
            
            <div className='a'>
              <a href="/">
                <div className="nav-item">
                  Categories
                </div>
              </a>
            </div>
            <div className='a'>
              <a href="/sub-categories">
                <div className="nav-item">
                 Sub - Categories
                </div>
              </a>
            </div>
            <div className='a'>
              <a href="/companies">
                <div className="nav-item">
                  Companies
                </div>
              </a>
            </div>
            <div className='a'>
              <a href="/reviews">
                <div className="nav-item">
                  Reviews
                </div>
              </a>
            </div>
            <div className="nav-item">
              <a href="/users" >
                <div className="navbar-inner-btn">Users</div>
              </a>
            </div>
            <div className="nav-item">
              <a href="/admins" >
                <div className="navbar-inner-btn">Admins</div>
              </a>
            </div>
            <div className="nav-item">
              <a onClick={() => {
                localStorage.clear();
                window.location.reload();
              }} >
                <div className="navbar-inner-btn">Logout</div>
              </a>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
