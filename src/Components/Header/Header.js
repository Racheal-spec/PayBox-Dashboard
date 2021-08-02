import React from 'react';
import './Header.scss';
import headshot from '../../Assets/Tomiheadshot.jpg';
import logo from '../../Assets/Logo.png';
import {Settings,NotificationsNone, AccountCircle} from '@material-ui/icons';

function Header() {
    return (
        <div className="header-wrapper">
           <div className="header-container1">
           <div className="logo">
            <img src={logo} alt="logo" />
            </div>
            <div className="header-container1">
                <div className="avatar">
                    <img src={headshot} alt="avatar" />
                </div>
                <div className="avatar-text">Hello Tomisin, welcome back!</div>
            </div>
           </div>
            <div className="header-container2">
              <div className="header-icon">
              <Settings />
              </div>
              <div className="header-icon">
              <NotificationsNone />
              </div>
              <div className="header-icon">
              <AccountCircle />
              </div>
            </div>
        </div>
    )
}

export default Header
