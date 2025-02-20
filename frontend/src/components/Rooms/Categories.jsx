import React from 'react'
import { MdOutlinePiano } from "react-icons/md";
import { FaTheaterMasks } from "react-icons/fa";
import { GiSaxophone } from "react-icons/gi";
import { FaGuitar } from "react-icons/fa";
import { IoMdHeadset } from "react-icons/io";

function Categories() {
    return (
        <div className='flex xs:justify-start overflow-x-scroll xs:overflow-x-auto  space-x-2 py-2 pl-1 mt-5'>
            
            <div className='flex items-center  bg-blight gap-1 px-3 py-1 rounded-lg  '>
                <MdOutlinePiano className='text-brown text-2xl'/>
                <p className='text-sm  text-white  py-1 rounded-md flex-shrink-0 font-bold' >
                    Piano</p>
            </div>
            <div className='flex items-center  bg-blight gap-1 px-3 rounded-lg py-1 '>
                <FaTheaterMasks 
                className='text-brown text-2xl'/>
                <p className='text-sm  text-white  py-1 rounded-md flex-shrink-0 font-bold' >
                    Opera</p>
            </div>
            <div className='flex items-center  bg-blight gap-1 px-3 rounded-lg py-1  '>
                <GiSaxophone  
                className='text-brown text-2xl'/>
                <p className='text-sm  text-white  py-1 rounded-md flex-shrink-0 font-bold' >
                Jazz</p>
            </div>
            <div className='flex items-center  bg-blight gap-1 px-3 rounded-lg py-1 '>
                <FaGuitar 
                className='text-brown text-2xl'/>
                <p className='text-sm  text-white  py-1 rounded-md flex-shrink-0 font-bold' >
                Rock</p>
            </div>
            <div className='flex items-center  bg-blight gap-1 px-3 rounded-lg py-1 '>
                <IoMdHeadset
                className='text-brown text-2xl'/>
                <p className='text-sm  text-white  py-1 rounded-md flex-shrink-0 font-bold' >
                Pop</p>
            </div>

           
        </div>
    )
}

export default Categories
