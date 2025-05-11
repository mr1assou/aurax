import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import axiosInstance from '../Axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login({ popUp, setPopUp, reload, setReload }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyLogin, setEmptyLogin] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    if (password !== "" && email !== "") {
      if (password == 2025) {
        try {
          await axiosInstance.post('login', { email });
          navigate('/home');
          setReload(!reload);
        } catch (err) {
          setLoginCredentials(true);
          setEmptyLogin(false);
        }
      } else {
        setLoginCredentials(true);
        setEmptyLogin(false);
      }
    } else {
      setLoginCredentials(false);
      setEmptyLogin(true);
    }
  };
  return (
    <div className='relative h-screen  flex justify-center items-center '>
      <img src="/assets/login_image.jpg" alt="Profile" className="w-full h-full object-cover object-top brightness-50" />

      <div className='absolute bg-opacity-50 w-[85%] max:w-[30%]  rounded-lg p-5 bg-white mb-10'>
        <div className='flex justify-between items-center'>
          <h1 className='text-brown font-bold text-[30px]' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Login</h1>
        </div>

        {emptyLogin && <p className='text-sm mt-2 text-red font-bold'>Please fill all fields</p>}
        {loginCredentials && <p className='text-sm mt-2 text-red font-bold'>Incorrect credentials</p>}

        <form className='p-2 flex flex-col  gap-2 items-center  mt-5 rounded-lg h-64 ' onSubmit={login}>
          <div className='w-full'>
            <p className='text-white'>Email:</p>
            <input
              type="text"
              className='py-2 px-3 w-full block outline-none text-[8px] mt-2 max:text-[12px]'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='w-full mt-5'>
            <p className='text-white'>Password:</p>
            <input
              type="password"
              className='  py-2 px-3 w-full block outline-none text-[8px] mt-2 max:text-[12px]'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-between w-full items-center mt-10'>
             <Link to="/sign_up" className="text-brown font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>Sign up</Link>
            <button
              type="submit" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}
              className="ml-2 font-bold px-4 py-1 max:py-2  hover:text-white " 
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
