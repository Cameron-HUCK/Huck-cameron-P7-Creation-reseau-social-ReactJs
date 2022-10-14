import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Récupérer les valeurs des 3 champs à envoyer au serveur : title, content, image
		let userEmail = document.getElementById('email').value;
		let userPassword = document.getElementById('password').value;

		console.log(userEmail);
		console.log(userPassword);

		let formData = new FormData();
		formData.append('User', JSON.stringify({
			email: userEmail,
			password: userPassword
		}));
		fetch(
			`http://localhost:4000/api/auth/signup`,
			{
				method: 'post',
				body: formData
			}
		)
		.then(function(res) {
			if(res.ok) {
				return res.json();
			}
		})
		.then(function(data) {
			navigate(`/signin`);
		})
		.catch(function(err) {
			console.log(err);
			let errorMessage = document.querySelector(".password-error");
			errorMessage.textContent = "Il y a eu un problème";
		})
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