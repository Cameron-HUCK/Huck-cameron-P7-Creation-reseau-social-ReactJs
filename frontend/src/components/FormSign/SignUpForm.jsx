import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Retrieve the values ​​of the 3 fields to send to the server: title, content, image
		let userEmail = document.getElementById('email').value;
		let userPassword = document.getElementById('password').value;
    
    // Input control not empty
    if (userEmail.trim().length === 0 || userPassword.trim().length === 0){
      return;
    }

    // Email validity check
    const regExEmail = (value) => {
      return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }
    if(!regExEmail(userEmail)){
      let errorMessage = document.querySelector(".password-error");
			errorMessage.textContent = "Il y a eu un problème";
      return;
    }

		// Sending data
		fetch(`http://localhost:4000/api/auth/signup`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: userEmail,
					password: userPassword
				})
			}
		)
		.then(function(res) {
			if(res.ok) {
				return res.json();
			}else {
        throw res.statusText;
      }
		})
		.then(function(data) {
			navigate(`/signin`);
		})
		.catch(function(err) {
			let errorMessage = document.querySelector(".password-error");
			errorMessage.textContent = "Il y a eu un problème";
		});
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
      <input type="password"
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