import React from 'react';
import Logo from '../../assets/logo-groupomania/icon-left-font-monochrome-black.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} aria-hidden alt="logo" className='logo-picture' width="140px" height="150px"/>
			</Link>
    </header>
  )
}

export default Header;
