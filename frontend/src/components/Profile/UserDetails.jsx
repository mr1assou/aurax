import React, { useEffect, useState } from 'react'
import event8 from '/assets/image2.jpg'
import piano from '/assets/login_image.jpg'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import axiosInstance from '../../Axios';
import { useParams } from 'react-router-dom';



function UserDetails({}) {
    const { id } = useParams(); 
    const [user,setUser]=useState();
    useEffect(()=>{
        const fetchData=async ()=>{
             const response = await axiosInstance.get('/getUser', {
                params: { user_id: id}
            });
            setUser(response.data[0]);
        }
        fetchData();
    },[]);
    
    
    

    return (
        <div className='h-96  w-  rounded-lg relative py-5 '>
            <img src={event8} alt="" className='w-full h-full object-cover  rounded-lg' />
            <div className='absolute left-2 bottom-0 translate-y-1/2 flex flex-col items-start w-full'>
                <div className=' bg-brown rounded-full p-1 h-[150px] w-[150px] max:h-[200px] max:w-[200px]'>
                    <img src={piano} alt="" className='rounded-full w-full h-full object-cover' />
                </div>
                <div>
                    <p className='text-white mt-2 text-lg'>{user?.first_name} {user?.last_name}</p>
                    <p className="text-white w-[80%] text-lg mt-2">
                        🎵 I'm a passionate musician dedicated to creating meaningful and soulful sounds. Whether it's composing, performing, or collaborating.

                    </p>
                </div>
                <div className='flex'>
                    <IoMdStar className='text-brown mt-2 text-2xl' />
                    <IoMdStar className='text-brown mt-2 text-2xl' />
                    <IoMdStar className='text-brown mt-2 text-2xl' />
                    <IoMdStar className='text-brown mt-2 text-2xl' />
                    <IoMdStarHalf className='text-brown mt-2 text-2xl' />
                </div>
            </div>
        </div>
    )
}

export default UserDetails
