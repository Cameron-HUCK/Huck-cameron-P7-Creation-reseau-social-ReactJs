import React from 'react';
import SignInForm from '../../components/FormSign/SignInForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserData } from "../../utils/lib";

const SignIn = () => {
  // Redirect function
	let navigate = useNavigate();
  
  // Localstorage recovery of the token, userId
	let userData = getUserData();

  useEffect(() => {
  	if(userData !== false) {
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
