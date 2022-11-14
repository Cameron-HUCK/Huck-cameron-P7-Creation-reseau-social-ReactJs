import React from 'react';
import SignUpForm from '../../components/FormSign/SignUpForm'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserToken } from "../../utils/lib";

const Signup = () => {

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
