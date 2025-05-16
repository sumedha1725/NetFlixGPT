import { removeUser } from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGES } from '../Utils/Constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';


const Header = ({isLoggedIn}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  

   const handleSignOut = () =>{
      dispatch(removeUser());
      navigate("/login")
      console.log("LogOut Successfully...")
   }

   const handleGptSearch = ()=> {
    dispatch(toggleGptSearchView())
    
   }


   const handleLanguageChange = (event) => {
    // console.log(event.target.value)
    dispatch(changeLanguage(event.target.value))

   }

   

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-50'
        src ={LOGO} alt="logo" />
      {isLoggedIn && 
      <div className='p-6'>
        <select className='bg-white p-2 m-2' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} 
          value={lang.identifier}>{lang.name}</option>)}
          

        </select>
        <button className='py-2 px-4 mx-4 bg-fuchsia-950 text-white font-bold rounded' onClick={handleGptSearch}>GPT Search</button>
        <button onClick={handleSignOut} className='font-bold text-white bg-red-700 w-20 h-10 cursor-pointer rounded'>(LogOut)</button>
        </div>}
  </div>
  )
};

export default Header;
