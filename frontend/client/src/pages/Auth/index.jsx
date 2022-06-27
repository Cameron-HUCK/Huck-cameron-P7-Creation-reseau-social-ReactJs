import React from 'react';
import Log from '../../components/Log';
import Image from "../../logo-groupomania/img-logo.png";

const Auth = () => {
  return (
    <div className='auth-Page'>
      <h1>Auth</h1>
      <div className='log-container'>
        <Log signin={false} signup={true}/>
        <div className="img-container">
        <img src={Image} aria-hidden alt="image" /> 
        </div>
      </div>
    </div> 
  );
}
export default Auth;
