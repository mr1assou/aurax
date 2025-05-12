import React, { useState } from 'react'
import axiosInstance from '../../Axios';
import { useNavigate } from 'react-router-dom';


function RoomForm({ roomForm, setRoomForm }) {
    const navigate = useNavigate();  // Using the useNavigate hook
    const [formData, setFormData] = useState({ description: '', category: 'Piano' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // create room here
        try {
            const response = await axiosInstance.post('addRoom', { description: formData.description, category: formData.category })
            const {user_id,token_rtc,token_rtm,channel}=response.data.room;
            navigate(`/VideoRoom`,{ state: {user_id,token_rtc,token_rtm,channel}});
            //reset
            // setFormData({
            //     description: '',
            //     category: 'Piano',
            // });
            // setRoomForm(false);
        }
        catch {
            console.log("error")
        }

    };
    return (
        <>
            {
                roomForm && <div class="fixed top-0 right-0 w-screen h-screen bg-black z-10 bg-opacity-90 flex justify-center items-center">
                    <div class="bg-black bg-opacity-70 w-[80%] max:w-[30%] mb-20 h-80 p-5">
                        <div class="flex justify-between items-center">
                            <h1 class="text-brown font-bold text-xl">Create Room </h1>
                            <span class="text-white font-black cursor-pointer" onClick={() => setRoomForm(false)}>&#x2715;</span>
                        </div>
                        <form class="p-2 flex flex-col justify-between gap-2 items-center bg-black mt-5" >
                            <div class="w-full">
                                <p class="text-white">Description:</p>
                                <input
                                    name="description"
                                    type="text"
                                    class="text-white bg-blight py-2 px-3 w-[100%] block outline-none text-[8px] mt-2"
                                    onChange={handleInputChange}
                                    placeholder="Description" required
                                />
                            </div>
                            <p className='text-white mt-2 w-full text-start'>Category:</p>
                            <select
                                name="category"
                                value={formData.category}
                                className="bg-blight px-3 py-1 max:px-10 text-white block sm:h-[40px] mt-3 w-full text-center"
                                onChange={handleInputChange}

                            >
                                <option value="Piano" className="inline p-0 text-[20px]">Piano</option>
                                <option value="Opera" className="inline p-0 text-[20px]">Opera</option>
                                <option value="Jazz" className="inline p-0 text-[20px]">Jazz</option>
                                <option value="Rock" className="inline p-0 text-[20px]">Rock</option>
                                <option value="Pop" className="inline p-0 text-[20px]">Pop</option>
                            </select>

                            <button onClick={handleSubmit}
                                type="submit"
                                class="ml-2 text-white bg-brown mt-5 px-10 py-1 max:py-2 hover:bg-white hover:text-brown ">
                                Create
                            </button >
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default RoomForm;