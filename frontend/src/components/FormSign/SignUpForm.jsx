import axios from "axios";
import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');

    await axios({
      method: "post",
      url:`http://localhost:4000/api/auth/signup`,
      withCredentials: false,
      data : {
        email,
        password,
      }
    })
    .then((res) => {
      if(res.data.errors) {
        emailError.textContent = res.data.errors.email;
        passwordError.textContent = res.data.errors.password;
      } else {
        window.location = '/signin';
      }
    })
    .catch((err) => console.log(err));
  }
  return (
    <form action="" onSubmit={handleRegister} id='sign-up-form'>
      <label htmlFor="email" className='flex-mail'>Add your Email :</label>
      <input type="text"
      name="email"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      required
      />
      <div className="email-error"></div>
      <label htmlFor="password">Create password:</label>
      <input type="text"
      name="password"
      id="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      required
      />
      <div className="password-error"></div>
      
      <div className="flex-button-end">
        <input type="submit" value="Validate registration" className='validate-button'/>
      </div>  
    </form>
  );
}

export default SignUpForm;