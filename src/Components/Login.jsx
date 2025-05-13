import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/validate';

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true)

  const [errMessage, setErrMessage] = useState(null);

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate form data
    console.log(fullname.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(fullname.current ? fullname.current.value : "", email.current.value , password.current.value, isSignInForm);
    // console.log(message);
    setErrMessage(message);


  } 

  const signInForm = () => {
    setIsSignInForm(!isSignInForm)

  }

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg' />
      
      </div>
      <form onSubmit= {(event) => event.preventDefault()}
      className='w-3/14 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0
       text-white rounded-lg'>

      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm? "Sign In" :"Sign Up"}</h1>

        {!isSignInForm && 
        <input 
        ref={fullname}
        type='text' placeholder='Full Name'
         className='p-4 my-4 w-full bg-gray-700' />}

        <input 
        ref={email}
        type='text' placeholder= "email" 
        className='p-4 my-4 w-full bg-gray-700'/>

        
        <input 
        ref={password}
        type='password'  placeholder='password' 
        className='p-4 my-4 w-full bg-gray-700'/>


        <p className='text-red-600 font-bold'>{errMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'
        onClick={handleButtonClick}>
          {isSignInForm? "Sign In" :"Sign Up"}</button>


        <p className='py-4 cursor-pointer' onClick={signInForm}>
          {isSignInForm ? "New to Netflix? Sign up Now" : "Already Registered? Sign In Now"}
        </p>

      </form>

    </div>

    
  );
};

export default Login;

