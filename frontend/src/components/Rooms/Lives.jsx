import React, { useState } from 'react'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/instrument.jpg'
import image9 from '../../assets/image7.jpg'
import piano from '../../assets/piano.jpg'
import { IoIosEye } from "react-icons/io";
import axiosInstance from '../../Axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'


function Live({ setPopUp , reload}) {
    const navigate=useNavigate();
    const [rooms,setRooms]=useState([]);

    const joinRoom=async (ownerOfRoom,channel)=>{
        try{
            const response=await axiosInstance.post('joinRoom',{channel});
            const {user_id,token_rtc,token_rtm}=response.data;
            navigate(`/VideoRoom`,{ state: {user_id,token_rtc,token_rtm,channel}});
        }
        catch(err){
            console.log(err);
            setPopUp(true);
        }
    }

    useEffect(()=>{
        const fetchRooms = async () => {
            try {
                const response = await axiosInstance.get('getRooms');
                setRooms(response.data.room); // Assuming 'room' is the correct property.
            } catch (err) {
                console.log('Error fetching rooms');
                setPopUp(true);
            }
        };
        fetchRooms();
    },[reload])
    return (
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max:grid-cols-4  gap-4 w-full '>
            {
                rooms.length>0 && rooms.map((room,index)=>{
                    return <div className='mt-5 ' key={index}>
                    <div className='bg-blight h-48 w-full rounded-lg  relative'>
                        <span className='text-brown font-bold text-lg absolute top-2 left-2 bg-black px-3'>Live</span>
                        <div className='flex absolute top-2 right-2  text-white items-center gap-1'>
                            <IoIosEye className='' />
                            <p className='text-sm'>999</p>
                        </div>
                        <img
                            src={image2}
                            alt=""
                            className="w-full h-full object-cover rounded-lg "
                        />
                    </div>
                    <div className='mt-2 flex   gap-2'>
                        <div className='w-[10%]'>
                            <div className='w-[40px] h-[40px]
                rounded-full bg-brown   p-[2px]'>
                                <img
                                    src={image2}
                                    alt=""
                                    className="w-full h-full object-cover rounded-full "
                                />
                            </div>
                        </div>
                        <div className='w-[60%]  ml-2 flex flex-col'>
                            <p className='text-lg text-white  w-full truncate font-bold'>{room.description}</p>
                            <p className='text-xs text-white  w-full truncate font-bold opacity-40 mt-2'>{room.first_name} {room.last_name}</p>
                        </div>
                        <div className='flex justify-center w-[30%] xs:justify-end'>
                            <div className='flex items-center'>
                                <button onClick={()=>joinRoom(room.user_id,room.channel)}  className='text-white bg-brown px-4 py-1 font-bold'>
                                    Join</button>
                            </div>
                        </div>
                    </div>
    
                </div>
                })
            }
            
            {/* <div className='mt-5 '>
                <div className='bg-blight h-48 w-full rounded-lg  relative'>
                    <span className='text-brown font-bold text-lg absolute top-2 left-2 bg-black  px-3'>Live</span>
                    <div className='flex absolute top-2 right-2  text-white items-center gap-1'>
                        <IoIosEye className='' />
                        <p className='text-sm'>999</p>
                    </div>
                    <img
                        src={image9}
                        alt=""
                        className="w-full h-full object-cover rounded-lg "
                    />
                </div>
                <div className='mt-2 flex   gap-2'>
                    <div className='w-[10%]'>
                        <div className='w-[40px] h-[40px]
            rounded-full bg-brown   p-[2px]'>
                            <img
                                src={image3}
                                alt=""
                                className="w-full h-full object-cover rounded-full "
                            />
                        </div>
                    </div>
                    <div className='w-[60%]  ml-2 flex flex-col'>
                        <p className='text-lg text-white  w-full truncate font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquam.</p>
                        <p className='text-xs text-white  w-full truncate font-bold opacity-40'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex justify-center w-[30%] xs:justify-end'>
                        <div className='flex items-center'>
                            <button onClick={joinRoom}  className='text-white bg-brown px-4 py-1 font-bold'>
                                Join</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-5 '>
                <div className='bg-blight h-48 w-full rounded-lg  relative'>
                    <span className='text-brown font-bold text-lg absolute top-2 left-2 bg-black px-3'>Live</span>
                    <div className='flex absolute top-2 right-2  text-white items-center gap-1'>
                        <IoIosEye className='' />
                        <p className='text-sm'>999</p>
                    </div>
                    <img
                        src={image3}
                        alt=""
                        className="w-full h-full object-cover rounded-lg "
                    />
                </div>
                <div className='mt-2 flex   gap-2'>
                    <div className='w-[10%]'>
                        <div className='w-[40px] h-[40px]
            rounded-full bg-brown   p-[2px]'>
                            <img
                                src={image3}
                                alt=""
                                className="w-full h-full object-cover rounded-full "
                            />
                        </div>
                    </div>
                    <div className='w-[60%]  ml-2 flex flex-col'>
                        <p className='text-lg text-white  w-full truncate font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquam.</p>
                        <p className='text-xs text-white  w-full truncate font-bold opacity-40'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex justify-center w-[30%] xs:justify-end'>
                        <div className='flex items-center'>
                            <button onClick={joinRoom}  className='text-white bg-brown px-4 py-1 font-bold'>
                                Join</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-5 '>
                <div className='bg-blight h-48 w-full rounded-lg  relative'>
                    <span className='text-brown font-bold text-lg absolute top-2 left-2 bg-black px-3'>Live</span>
                    <div className='flex absolute top-2 right-2  text-white items-center gap-1'>
                        <IoIosEye className='' />
                        <p className='text-sm'>999</p>
                    </div>
                    <img
                        src={piano}
                        alt=""
                        className="w-full h-full object-cover rounded-lg "
                    />
                </div>
                <div className='mt-2 flex   gap-2'>
                    <div className='w-[10%]'>
                        <div className='w-[40px] h-[40px]
            rounded-full bg-brown   p-[2px]'>
                            <img
                                src={image3}
                                alt=""
                                className="w-full h-full object-cover rounded-full "
                            />
                        </div>
                    </div>
                    <div className='w-[60%]  ml-2 flex flex-col'>
                        <p className='text-lg text-white  w-full truncate font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquam.</p>
                        <p className='text-xs text-white  w-full truncate font-bold opacity-40'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex justify-center w-[30%] xs:justify-end'>
                        <div className='flex items-center'>
                            <button onClick={joinRoom}  className='text-white bg-brown px-4 py-1 font-bold'>
                                Join</button>
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default Live
