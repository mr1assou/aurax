import React from 'react'
import event8 from '../../assets/event8.jpg'
import piano from '../../assets/piano.jpg'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

function UserDetails() {
    return (
        <div className='h-96  w- bg-white rounded-lg relative'>
            <img src={event8} alt="" className='w-full h-full object-cover rounded-lg' />
            <div className='absolute left-2 bottom-0 translate-y-1/2 flex flex-col items-start w-full'>
                <div className=' bg-brown rounded-full p-1 h-[150px] w-[150px] max:h-[200px] max:w-[200px]'>
                    <img src={piano} alt="" className='rounded-full w-full h-full object-cover' />
                </div>
                <div>
                    <p className='text-white mt-2'>Marwane Assou</p>
                    <p className="text-white w-[80%] text-[10px] mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium at, cum repellat deserunt voluptatibus id!
                    </p>
                </div>
                <div className='flex'>
                    <IoMdStar className='text-brown mt-2 text-2xl'/>
                    <IoMdStar className='text-brown mt-2 text-2xl'/>
                    <IoMdStar className='text-brown mt-2 text-2xl'/>
                    <IoMdStar className='text-brown mt-2 text-2xl'/>
                    <IoMdStarHalf className='text-brown mt-2 text-2xl'/>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
