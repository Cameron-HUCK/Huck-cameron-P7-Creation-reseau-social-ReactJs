import React from 'react';
import SignUpForm from '../../components/FormSign/SignUpForm'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserData } from "../../utils/lib";

const Signup = () => {
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
      <h1>Signup :</h1>
      <div className='log-container'>
        <div className="form-container">
                <div className="sign-container">
                  <SignUpForm />
                </div>    
            </div>
      </div>
    </div> 
  );
};
export default Signup;
