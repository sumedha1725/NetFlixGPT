import { removeUser } from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from '../Utils/Constants';


const Header = ({isLoggedIn}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  

   const handleSignOut = () =>{
      dispatch(removeUser());
      navigate("/login")
      console.log("LogOut Successfully...")
   }

   

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-50'
        src ={LOGO} alt="logo" />
      {isLoggedIn && <div>
        <button onClick={handleSignOut} className='font-bold text-white bg-red-700 w-20 h-10 cursor-pointer'>(LogOut)</button>
        </div>}
  </div>
  )
};

export default Header;
