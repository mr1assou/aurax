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
  const [user,setUser]=useState([]);
    useEffect(() => {
          const fetchPosts = async () => {
              try {
                  const response = await axiosInstance.get('test');
                  setUser(response.data);
              } catch (error) {
                  console.error('Upload error:', error);
              }
          };
  
          fetchPosts();
      }, []);

  return (
    <div className='flex  justify-between items-center '>
        <div className='lg:w-[70px] lg:h-[80px] w-[50px] h-[60px] '>
            <img src="/assets/ourlogo.png" alt="" className='object-cover w-full h-full'/>
        </div>
        <div className='flex w-[60%] justify-between xl:w-[20%]'>
            {/* Using NavLink for active link styling */}
            <NavLink 
              to="/home" 
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
              <NavLink 
              to={`/profile/${user.user_id}`}
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
