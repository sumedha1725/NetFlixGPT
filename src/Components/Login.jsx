import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/validate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser} from '../Utils/userSlice';
import { BACKGROUND_IMG } from '../Utils/Constants';


const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true)

  const [errMessage, setErrMessage] = useState(null);

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    //validate form data
    console.log(fullname.current.value);
    console.log(email.current.value);
    console.log(password.current.value);


    
    const message = checkValidData(fullname.current ? fullname.current.value : "",  email.current.value , password.current.value, isSignInForm);
    // console.log(message);
    setErrMessage(message);

    if(!message) {
      dispatch(
        addUser({
          name: fullname.current?.value,
          email: email.current.value,
        })
      );
      navigate("/browse");
    }

  } ;

  const signInForm = () => {
    setIsSignInForm(!isSignInForm)

  }

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img  src={BACKGROUND_IMG} />
      
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

