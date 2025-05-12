import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true)
  const signInForm = () => {
    setIsSignInForm(!isSignInForm)

  }

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg' />
      
      </div>
      <form className='w-3/14 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0
       text-white rounded-lg'>

      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm? "Sign In" :"Sign Up"}</h1>

        {!isSignInForm && <input type='text' placeholder='Full Name'
         className='p-4 my-4 w-full bg-gray-700' />}

        <input type='text' placeholder= "email" 
        className='p-4 my-4 w-full bg-gray-700'/>

        
        <input type='password'  placeholder='password' 
        className='p-4 my-4 w-full bg-gray-700'/>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>
          {isSignInForm? "Sign In" :"Sign Up"}</button>


        <p className='py-4 cursor-pointer' onClick={signInForm}>
          {isSignInForm ? "New to Netflix? Sign up Now" : "Already Registered? Sign In Now"}
        </p>

      </form>

    </div>

    
  );
};

export default Login;


