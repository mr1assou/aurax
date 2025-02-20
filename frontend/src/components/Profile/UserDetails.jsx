import React from 'react'
import image5 from '../../assets/image2.jpg'
import image4 from '../../assets/image4.jpg'
import image2 from '../../assets/face1.jpg'
function UserDetails() {
    return (
        <div className='h-96  w- bg-white rounded-lg relative'>
            <img src={image5} alt="" className='w-full h-full object-cover rounded-lg' />
            <div className='absolute left-2 bottom-0 translate-y-1/2 flex flex-col items-start w-full'>
                <div className=' bg-brown rounded-full p-1 h-[150px] w-[150px] max:h-[200px] max:w-[200px]'>
                    <img src={image2} alt="" className='rounded-full w-full h-full object-top' />
                </div>
                <div>
                    <p className='text-white mt-2'>Marwane Assou</p>
                    <p className="text-white w-[80%] text-[10px] mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium at, cum repellat deserunt voluptatibus id!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
