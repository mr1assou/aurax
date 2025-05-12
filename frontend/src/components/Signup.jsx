import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import axiosInstance from '../Axios';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Authentication({ setPopUp }) {
    const [email, setEmail] = useState("");
    const [signUpCredentials, setSignUpCredentials] = useState({ first_name: "", last_name: "" });
    const [empty, setEmpty] = useState(false);
    const navigate = useNavigate();
    
    const register = async (e) => {
        e.preventDefault();
        if (signUpCredentials.first_name !== "" && signUpCredentials.last_name !== "" && email !== "") {
            try {
                await axiosInstance.post('addUser', { ...signUpCredentials, email });
                setSignUpCredentials({ first_name: "", last_name: "" });
                setEmail("");
                navigate('/');
            } catch (error) {
                console.error("Registration failed:", error);
            }
        } else {
            setEmpty(true);
        }
    }

    const handleSignUpCredentials = (e) => {
        setSignUpCredentials({
            ...signUpCredentials,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className='relative h-screen  flex justify-center items-center '>
            <img src="/assets/event7.jpg" alt="Profile" className="w-full h-full object-cover object-top brightness-50" />

            <div className='absolute bg-opacity-50 w-[85%] max:w-[30%]  rounded-lg p-5 bg-white mb-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-brown font-bold text-[30px]' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Sign up</h1>
                </div>

                <form className='p-2 flex flex-col  gap-2 items-center  mt-5 rounded-lg h-80 ' onSubmit={register} >
                    <div className='w-full'>
                        <p className='text-white'>First Name:</p>
                        <input
                            name="first_name"
                            type="text"
                            className='text-black  py-2 px-3 w-full block outline-none text-[8px] mt-2 max:text-[12px]'
                            placeholder='First Name'
                            value={signUpCredentials.first_name}
                            onChange={handleSignUpCredentials}
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <p className='text-white'>Last Name:</p>
                        <input
                            name="last_name"
                            type="text"
                            className='text-black  py-2 px-3 w-full block outline-none text-[8px] mt-2 max:text-[12px]'
                            placeholder='Last Name'
                            value={signUpCredentials.last_name}
                            onChange={handleSignUpCredentials}
                            required
                        />
                    </div>
                    <div className='w-full'>
                        <p className='text-white'>Email:</p>
                        <input
                            type="email"
                            className='text-black  py-2 px-3 w-full block outline-none text-[8px] mt-2 max:text-[12px]'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex justify-between w-full items-center mt-10'>
                        <Link to="/" className="text-brown font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>Login</Link>
                        <button
                            type="submit"
                            className="ml-2 font-bold px-4 py-1 max:py-2  hover:text-white " style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Authentication;
