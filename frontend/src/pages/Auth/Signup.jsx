import React from 'react';
import SignUpForm from '../../components/FormSign/SignUpForm'

const Signup = () => {
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
