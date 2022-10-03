import React, { useState } from "react";
import axios from 'axios';
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');
    axios({
      method: "post",
      url:`http://localhost:4000/api/auth/login`,
      withCredentials: false,
      data : {
        email,
        password,
      }
    })
    .then((res) => {
      if (res.data.errors){
        emailError.textContent = res.data.errors.email;
        passwordError.textContent = res.data.errors.password;
      } else {
        window.location = '/';
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  return (
      <form action="" onSubmit={handleLogin} id="sign-up-form">
        <label htmlFor="email" className='flex-mail'>Email :</label>
        <input 
        type="text" 
        name="email" 
        id="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        required
        />
        <div className="email-error"></div>
        <label htmlFor="password">Password :</label>
        <input 
        type="password" 
        name="password" 
        id="password" 
        onChange={(e) => setPassWord(e.target.value)}
        value={password}
        required
        />
        <div className="password-error"></div>
        <div className="flex-button-end">
          <input type="submit" value=" Se connecter" className='validate-button' />
        </div>  
     </form>
  );
}

export default SignInForm;