import React from 'react';
import image3 from '../../assets/image3.jpg';
import z1 from '../../assets/zacking1.jpeg';
import z2 from '../../assets/zacking2.jpeg';
import z3 from '../../assets/zacking3.jpeg';
import z5 from '../../assets/zacking5.jpeg';
import z6 from '../../assets/zacking6.jpeg';
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

function Posts() {
  return (
    <div className=" w-full max-w-md mx-auto bg-black rounded-lg py-4 px-4 shadow-lg border border-gray-700 mt-5">
      <div className='mt-5'>
        {/* User Information */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={image3} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-3 flex flex-col">
            <p className="text-white font-semibold text-sm">Ghassane Bendir</p>
            <small className="text-grey text-xs">Published: September 15, 2024, 19:00</small>
          </div>
        </div>
        {/* Post Content */}
        <p className="mt-4 text-white text-xs leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iure.
        </p>
        {/* Post Image */}
        <div className="mt-4">
          <img src={z1} alt="Post" className="rounded-lg w-full object-cover" />
        </div>
        {/* Interaction Buttons */}
        <div className=' flex justify-between mt-3 text-grey'>
          <p className='text-xs'><AiFillLike className='text-grey inline' /> 1000 </p>
          <div className='flex gap-2'>
            <p className='text-xs'>43 comments</p>
            <p className='text-xs'>77 reposts</p>
          </div>
        </div>
        <div className='mt-3 flex items-center gap-3 text-grey'>
          <div>
            <div className='flex items-center gap-2'>
              <AiFillLike className='text-grey' />
              <p className='text-grey text-sm'>Like</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <FaComment
              className='text-grey' />
            <p className='text-grey text-sm'>Comment</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegShareSquare
              className='text-grey' />
            <p className='text-grey text-sm'>Like</p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        {/* User Information */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={image3} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-3 flex flex-col">
            <p className="text-white font-semibold text-sm">Zakaria Benraddad</p>
            <small className="text-grey text-xs">Published: September 15, 2024, 19:00</small>
          </div>
        </div>
        {/* Post Content */}
        <p className="mt-4 text-white text-xs leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iure.
        </p>
        {/* Post Image */}
        <div className="mt-4">
          <img src={z2} alt="Post" className="rounded-lg w-full object-cover" />
        </div>
        {/* Interaction Buttons */}
        <div className=' flex justify-between mt-3 text-grey'>
          <p className='text-xs'><AiFillLike className='text-grey inline' /> 1000 </p>
          <div className='flex gap-2'>
            <p className='text-xs'>43 comments</p>
            <p className='text-xs'>77 reposts</p>
          </div>
        </div>
        <div className='mt-3 flex items-center gap-3 text-grey'>
          <div>
            <div className='flex items-center gap-2'>
              <AiFillLike className='text-grey' />
              <p className='text-grey text-sm'>Like</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <FaComment
              className='text-grey' />
            <p className='text-grey text-sm'>Comment</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegShareSquare
              className='text-grey' />
            <p className='text-grey text-sm'>Like</p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        {/* User Information */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={image3} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-3 flex flex-col">
            <p className="text-white font-semibold text-sm">Wahab Hammoud</p>
            <small className="text-grey text-xs">Published: September 15, 2024, 19:00</small>
          </div>
        </div>
        {/* Post Content */}
        <p className="mt-4 text-white text-xs leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iure.
        </p>
        {/* Post Image */}
        <div className="mt-4">
          <img src={z3} alt="Post" className="rounded-lg w-full object-cover" />
        </div>
        {/* Interaction Buttons */}
        <div className=' flex justify-between mt-3 text-grey'>
          <p className='text-xs'><AiFillLike className='text-grey inline' /> 1000 </p>
          <div className='flex gap-2'>
            <p className='text-xs'>43 comments</p>
            <p className='text-xs'>77 reposts</p>
          </div>
        </div>
        <div className='mt-3 flex items-center gap-3 text-grey'>
          <div>
            <div className='flex items-center gap-2'>
              <AiFillLike className='text-grey' />
              <p className='text-grey text-sm'>Like</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <FaComment
              className='text-grey' />
            <p className='text-grey text-sm'>Comment</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegShareSquare
              className='text-grey' />
            <p className='text-grey text-sm'>Like</p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        {/* User Information */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={image3} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-3 flex flex-col">
            <p className="text-white font-semibold text-sm">Marouane Bssla</p>
            <small className="text-grey text-xs">Published: September 15, 2024, 19:00</small>
          </div>
        </div>
        {/* Post Content */}
        <p className="mt-4 text-white text-xs leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iure.
        </p>
        {/* Post Image */}
        <div className="mt-4">
          <img src={z5} alt="Post" className="rounded-lg w-full object-cover" />
        </div>
        {/* Interaction Buttons */}
        <div className=' flex justify-between mt-3 text-grey'>
          <p className='text-xs'><AiFillLike className='text-grey inline' /> 1000 </p>
          <div className='flex gap-2'>
            <p className='text-xs'>43 comments</p>
            <p className='text-xs'>77 reposts</p>
          </div>
        </div>
        <div className='mt-3 flex items-center gap-3 text-grey'>
          <div>
            <div className='flex items-center gap-2'>
              <AiFillLike className='text-grey' />
              <p className='text-grey text-sm'>Like</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <FaComment
              className='text-grey' />
            <p className='text-grey text-sm'>Comment</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegShareSquare
              className='text-grey' />
            <p className='text-grey text-sm'>Like</p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        {/* User Information */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={image3} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-3 flex flex-col">
            <p className="text-white font-semibold text-sm">Marwane Assou</p>
            <small className="text-grey text-xs">Published: September 15, 2024, 19:00</small>
          </div>
        </div>
        {/* Post Content */}
        <p className="mt-4 text-white text-xs leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iure.
        </p>
        {/* Post Image */}
        <div className="mt-4">
          <img src={z6} alt="Post" className="rounded-lg w-full object-cover" />
        </div>
        {/* Interaction Buttons */}
        <div className=' flex justify-between mt-3 text-grey'>
          <p className='text-xs'><AiFillLike className='text-grey inline' /> 1000 </p>
          <div className='flex gap-2'>
            <p className='text-xs'>43 comments</p>
            <p className='text-xs'>77 reposts</p>
          </div>
        </div>
        <div className='mt-3 flex items-center gap-3 text-grey'>
          <div>
            <div className='flex items-center gap-2'>
              <AiFillLike className='text-grey' />
              <p className='text-grey text-sm'>Like</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <FaComment
              className='text-grey' />
            <p className='text-grey text-sm'>Comment</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaRegShareSquare
              className='text-grey' />
            <p className='text-grey text-sm'>Like</p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Posts;
