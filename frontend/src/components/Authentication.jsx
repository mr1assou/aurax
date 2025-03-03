import React from 'react'
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import axiosInstance from '../Axios';
import { useNavigate } from 'react-router-dom';

function Authentication({popUp,setPopUp,reload,setReload}) {
  const navigate=useNavigate();
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [signUpCredentials, setSignUpCredentials] = useState({ first_name: "", last_name: "" })
  const [empty, setEmpty] = useState(false);
  const [emptyLogin, setEmptyLogin] = useState(false);

  const [loginCredentials, setLoginCredentials] = useState(false);
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    if (signUpCredentials.first_name !== "" && signUpCredentials.last_name !== "" && email !== "") {
      await axiosInstance.post('addUser', { ...signUpCredentials, email }).then(response => {
        setSignUpCredentials({ first_name: "", last_name: "" })
        setSignUp(false);
      })
    }
    else {
      setEmpty(true);
    }
  }

  const login = async (e) => {
    e.preventDefault();
    if (password !== "" && email !== "") {
      if (password == 2025){
        await axiosInstance.post('login',{email:email}).then((response)=>{
          // logic i need to go 
          setPopUp(false);
          setReload(!reload);
          
        }).catch((err)=>{
          setEmptyLogin(false);
          setLoginCredentials(true);
        })
      }
      else{
        setLoginCredentials(true);
        setEmptyLogin(false);
      }
    }
    else {
      setLoginCredentials(false);
      setEmptyLogin(true);
    }
  }

  const handleSignUpCredentials = (e) => {
    setSignUpCredentials({
      ...signUpCredentials,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div >
        {
        popUp && 
       <div className='fixed top-0 right-0 w-screen h-screen bg-black z-10 bg-opacity-90 flex justify-center items-center '>
         <div
           className={`bg-black bg-opacity-70 w-[80%] max:w-[30%] mb-20 ${signUp ? 'h-96' : 'h-96'
             } rounded-lg p-5`}
         >
           <div className='flex justify-between items-center'>
             {
               signUp ? <h1 className='text-brown font-bold text-[14px]l'>Sign up</h1> : <h1 className='text-brown font-bold text-[14px]l'>Login</h1>
             }
 
             <RxCross1 className='text-white font-black cursor-pointer' onClick={()=>setPopUp(false)}/>
           </div>
           {
             signUp && empty && <p className=' text-sm mt-2 text-red font-bold'>please fill all fields</p>
           }
           {
             !signUp && emptyLogin && <p className=' text-sm mt-2 text-red font-bold'>please fill all fields</p>
           }
           {
             loginCredentials && !signUp && <p className=' text-sm mt-2 text-red font-bold'> incorrect credentials</p>
           }
 
           <form className='p-2 flex flex-col justify-between gap-2 items-center bg-black mt-5'>
             {
               signUp && <div className='w-full'>
                 <p className='text-white'>First Name:</p>
                 <input
                   name="first_name"
                   type="text"
                   className='text-white bg-blight py-2 px-3  w-[100%] block outline-none text-[8px] mt-2 max:text-[12px]'
                   placeholder='first Name' required onChange={handleSignUpCredentials}
                 />
               </div>
             }
             {
               signUp && <div className='w-full '>
                 <p className='text-white'>Last Name:</p>
                 <input 
                   name="last_name"
                   type="text"
                   className='text-white bg-blight py-2 px-3  w-[100%] block outline-none text-[8px] mt-2 max:text-[12px]'
                   placeholder='Last name' required onChange={handleSignUpCredentials}
                 />
               </div>
             }
             <div className='w-full'>
               <p className='text-white'>Email:</p>
               <input
                 type="text"
                 className='text-white bg-blight py-2 px-3  w-[100%] block outline-none text-[8px] mt-2 max:text-[12px]' required
                 placeholder='Email'
                 onChange={(e) => setEmail(e.target.value)}
               />
             </div>
 
             {
               !signUp && <div className='w-full'>
                 <p className='text-white'>Password:</p>
                 <input onChange={(e) => setPassword(e.target.value)}
                   required
                   type="text"
                   className='text-white bg-blight py-2 px-3  w-[100%] block outline-none text-[8px] mt-2 max:text-[12px]'
                   placeholder='comment...'
                 />
               </div>
             }
             {
               signUp ?
                 <button type="submit" className="ml-2  text-white bg-brown mt-5 px-10 py-1 max:py-2 hover:bg-white hover:text-brown " onClick={register}>
                   Sign up
                 </button> : <button type="submit" className="ml-2  text-white bg-brown mt-5 px-10 py-1 max:py-2 hover:bg-white hover:text-brown " onClick={login}>
                   Login
                 </button>
             }
 
           </form>
           {
             signUp ? <button className='text-brown mt-5 font-bold 
             text-[14px]s' onClick={() => setSignUp(false)}>go to log in</button> : <button className='text-brown mt-5 font-bold 
             text-[14px]s' onClick={() => setSignUp(true)}>go to sign up</button>
           }
 
         </div>
       </div>
       }
    </div>
  )
}

export default Authentication
