import Logo from '../../assets/logo-groupomania/icon-left-font.png';

const Footer = () => {
  return (
     <footer>
       <div className='footer-container'>
          <div className='logo-container'>
            <img className='logo-size' src={Logo} aria-hidden alt="logo" />
          </div>
          <div className='logo-container'>
            <img className='logo-size' src={Logo} aria-hidden alt="logo" />
          </div> 
       </div>
     </footer>
  );
}

export default Footer;
