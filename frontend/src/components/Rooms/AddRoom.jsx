import React from 'react'
import { FaPlus } from "react-icons/fa";
import axiosInstance from '../../Axios';

function AddRoom({ setPopUp, setRoomForm }) {
    const createRoom = async () => {

        try {
            const response = await axiosInstance.get('test');
            setRoomForm(true);
        }
        catch (err) {
            console.log('error navigation');
            setPopUp(true);
        }
    }


    return (
        <button className='text-black border-2 border-brown px-2 py-2 mt-5  font-bold xl:py-3 xl:px-5 xl:text-sm' onClick={createRoom}>
            create a room</button>
    )
}

export default AddRoom
