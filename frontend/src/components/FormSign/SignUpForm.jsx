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
      url:`${process.env.REACT_APP_API_URL}api/auth/signup`,
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
      }
    })
    .catch((err) => console.log(err));
  }
  return (
    <form action="" onSubmit={handleRegister} id='sign-up-form'>
      <label htmlFor="email">Email</label>
      <br />
      <input type="text"
      name="email"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      />
      <div className="email-error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input type="text"
      name="password"
      id="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
      <div className="password-error"></div>
      <input type="submit" value="Valider inscription" />
    </form>
  );
}

export default SignUpForm;