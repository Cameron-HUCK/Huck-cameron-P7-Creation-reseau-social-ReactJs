import React from 'react';
import SignInForm from '../../components/FormSign/SignInForm';

const SignIn = () => {
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
