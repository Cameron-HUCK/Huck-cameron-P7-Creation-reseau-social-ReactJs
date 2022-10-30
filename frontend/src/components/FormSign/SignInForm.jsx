import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Récupérer les valeurs des 3 champs à envoyer au serveur : title, content, image
		let userEmail = document.getElementById('email').value;
		let userPassword = document.getElementById('password').value;

    //controle input pas vide
    if (userEmail.trim().length === 0 || userPassword.trim().length === 0){
      return;
    }

    //controle validite email
    const regExEmail = (value) => {
      return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }
    if(!regExEmail(userEmail)){
      let errorMessage = document.querySelector(".password-error");
			errorMessage.textContent = "Invalid email or password";
      return;
    }
    
		// Sending data
		fetch(`http://localhost:4000/api/auth/login`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
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
      localStorage.setItem('dataUser', JSON.stringify(data));
			console.log('data', data);
			navigate(`/`);
		})
		.catch(function(err) {
			console.log(err);
			let errorMessage = document.querySelector(".password-error");
			errorMessage.textContent = "Il y a eu un problème";
		});
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