import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'; // React Router
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import axiosInstance from '../Axios'
import { BiSolidParty } from "react-icons/bi";



function Header() {
  const [profile,setProfile]=useState(false);

  useEffect(()=>{
    // axiosInstance.get('test').then((response)=>{
    //   setProfile(true);
    // }).catch((err)=>{
    //   console.log('user doesn t authenticate yet');
    // })
  },[])

  return (
    <div className='flex h-[4%] justify-between items-center '>
        <h1 className='text-brown font-bold text-center'>Aurax.</h1>
        <div className='flex w-[50%] justify-between xl:w-[20%]'>
            {/* Using NavLink for active link styling */}
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'text-brown text-xl' : 'text-white text-xl hover:text-brown transition-transform duration-300'
              }
            >
              <FaHome />
            </NavLink>
            <NavLink 
              to="/rooms" 
              className={({ isActive }) => 
                isActive ? 'text-brown text-xl' : 'text-white text-xl hover:text-brown transition-transform duration-300'
              }
            >
              <MdOutlineOndemandVideo />
            </NavLink>
            <NavLink 
              to="/marketplace" 
              className={({ isActive }) => 
                isActive ? 'text-brown text-xl' : 'text-white text-xl hover:text-brown transition-transform duration-300'
              }
            >
              <LuShoppingCart />
            </NavLink>
            {
              profile && <NavLink 
              to="/Profile" 
              className={({ isActive }) => 
                isActive ? 'text-brown text-xl' : 'text-white text-xl hover:text-brown transition-transform duration-300'
              }
            >
              <CgProfile />
            </NavLink>
            }
            
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                isActive ? 'text-brown text-xl' : 'text-white text-xl hover:text-brown transition-transform duration-300'
              }
            >
              <BiSolidParty />
            </NavLink>
        </div>
    </div>
  );
}

export default Header;
