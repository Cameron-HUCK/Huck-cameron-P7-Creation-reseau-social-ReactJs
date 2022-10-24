import React from 'react';
import Logo from '../../assets/logo-groupomania/icon-left-font-monochrome-black.png';

const Header = () => {
  function getUserToken() {
		let dataToken = localStorage.getItem('dataUser');
		if(dataToken == null) {
				return {};
			}
			try {
				let dataLocalStorage = JSON.parse(dataToken);
				return dataLocalStorage;
			}
			catch(e) {
				console.log(e);
				return {};
			}
		};
		let userToken = getUserToken('token');
		console.log(userToken.token);
    
  return (
     <header>
       <a href="http://localhost:3000/">
        <img src={Logo} aria-hidden alt="logo" className='logo-picture' width="140px" height="150px"/>
       </a>
     </header>
  );
}

export default Header;
