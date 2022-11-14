import React from 'react';
import SignInForm from '../../components/FormSign/SignInForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserToken } from "../../utils/lib";

const SignIn = () => {

	let navigate = useNavigate();
  // Recuperation localstorage du token, userId
	let userToken = getUserToken();

  useEffect(() => {
  	if(userToken !== false) {
			navigate(`/`);
  	}
  });

  return (
    <div className='auth-Page'>
      <h1>Signin :</h1>
      <div className="form-container">
                <div className="sign-container">
                    <SignInForm />
                </div>    
            </div>
    </div> 
  );
}
export default SignIn;
